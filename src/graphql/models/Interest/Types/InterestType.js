const {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLInputObjectType
} = require('graphql');

const UserDB = require('../../../../models/User');
const InterestDB = require('../../../../models/Interest');

const {
  InterestDeletedWishType,
  WishType
} = require('./Types');

const { User } = require('../../User/UserSchema');

const UserType = User;

function findInterestStuff(field = '', subField = '') {
  return (interest, { page, limit }) => {
    page = limit * page;

    return new Promise((resolve, reject) => {
      InterestDB
          .findOne({
            _id: interest._id
          })
          .select({
            _id: 1,
            [field]: 1,
          })
          .slice(field, [page, limit])
          .populate({
            path: subField ? `${field}.${subField}` : field
          })
          .exec((err, interest) => {
            err ? reject(err) : resolve(interest[field]);
          });
    });
  }
}

function findUserByInterest(interest) {
  return new Promise((resolve, reject) => {
    UserDB
      .findOne({
        _id: interest.user
      })
      .exec((err, user) => {
        err ? reject(err) : resolve(user);
      });
  });
}


/*** Interest Type ***/
const InterestType = new GraphQLObjectType({
  name: 'Interest',
  fields: () => ({
    countFollowers: {
      type: GraphQLInt
    },
    country: {
      type: GraphQLString
    },
    deletedWishes: {
      type: new GraphQLList(InterestDeletedWishType),
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 0
        },
        limit: {
          type: GraphQLInt,
          defaultValue: 5
        }
      },
      resolve: findInterestStuff('deletedWishes', 'stuff')
    },
    followers: {
      type: new GraphQLList(UserType),
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 0
        },
        limit: {
          type: GraphQLInt,
          defaultValue: 5
        }
      },
      resolve: findInterestStuff('followers')
    },
    following: {
      type: new GraphQLList(UserType),
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 0
        },
        limit: {
          type: GraphQLInt,
          defaultValue: 5
        }
      },
      resolve: findInterestStuff('following')
    },
    unfollow: {
      type: new GraphQLList(UserType),
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 0
        },
        limit: {
          type: GraphQLInt,
          defaultValue: 5
        }
      },
      resolve: findInterestStuff('unfollow')
    },
    user: {
      type: UserType,
      resolve: findUserByInterest
    },
    wishes: {
      type: new GraphQLList(WishType),
      args: {
        page: {
          type: GraphQLInt,
          defaultValue: 0
        },
        limit: {
          type: GraphQLInt,
          defaultValue: 5
        }
      },
      resolve: findInterestStuff('wishes', 'stuff')
    }  
  })
});

module.exports = InterestType;