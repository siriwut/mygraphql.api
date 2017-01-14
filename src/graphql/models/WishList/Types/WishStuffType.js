const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = require('graphql');

const { ObjectID } = require('mongodb');

const StuffGetLimitInterestCommand = require('../MongoCmds/StuffGetLimitInterestCommand');
const mongoClient = require('../../../../helpers/MongoClientConnect');

const {
  Time
} = require('../../../../helpers/Util');

const {
  StuffLocationType,
  StuffImageType,
  StuffVariationType
} = require('../../Stuff/Types/Types');

const {
  UserPaymentOmiseCardType,
  UserPaymentOmiseType,
  UserPaymentType,
  UserAddressType,
  UserFacebookPageType,
  UserFacebookType,
  UserBrandImageType,
  UserShopType,
  UserRoleType
} = require('../../User/Types/Types');


const {
  User
} = require('../../User/UserSchema');

const UserType = User;

const CustomWishStuffType = new GraphQLObjectType({
  name: 'CustomWishStuff',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    name: { 
      type: GraphQLString 
    },
    category: { 
      type: GraphQLString 
    },
    description: { 
      type: GraphQLString 
    },
    location: { 
      type: StuffLocationType
    },
    market: { 
      type: GraphQLString 
    },
    owner: { 
      type: UserType,
      resolve: ({ owner }) => {
        return new Promise((resolve, reject) => {
          mongoClient.exec((db) => {
            const collection = db.collection('users');

            collection.findOne({ _id: ObjectID(owner) }, (error, user) => {
              db.close();
              return error ? reject(error) : resolve(user);
            });
          });
        });
      } 
    },
    path: { 
      type: GraphQLString 
    },
    price: { 
      type: GraphQLInt 
    },
    quantity: { 
      type: GraphQLInt 
    },
    category: { 
      type: GraphQLString 
    },
    tags: { 
      type: new GraphQLList(GraphQLString) 
    },
    createDate: { 
      type: GraphQLString 
    },
    createdDate: { 
      type: GraphQLString 
    },
    market: { 
      type: GraphQLString 
    },
    images: { 
      type: new GraphQLList(StuffImageType) 
    },
    wishes: { 
      type: new GraphQLList(GraphQLString)
    },
    likeCount: {
      type: GraphQLInt,
      resolve: ({ likes = [] }) => likes.length
    },
    likeStatus: {
      type: GraphQLBoolean,
      resolve: ({ likes = [] }, args, { userId = '' }) => {
        return likes.find(like => like === userId) ? true : false;
      }
    },
    wishCount: {
      type: GraphQLInt,
      resolve: ({ wishes = [] }) => wishes.length
    },
    wishStatus: {
      type: GraphQLBoolean,
      resolve: ({ wishes = [] }, args, { userId = '' }) => {
        return wishes.find(wishe => wishe === userId) ? true : false;
      }
    },
    buyClick: {
      type: GraphQLInt,
      resolve: ({ buyClick = 0 }) =>  buyClick
    },
    sumQuantity: {
      type: GraphQLInt,
      resolve: ({ quantity = 0, variations = [] }) => {
        if (!variations.length) {
          return quantity || 0;
        }

        return variations
                  .filter(v => v.quantity)
                  .map(v => v.quantity)
                  .reduce((a, b) => a + b, 0);
      }
    },
    timeDiff: {
      type: GraphQLString,
      resolve: ({ createDate }) => Time.diff(new Date(createDate), new Date)
    },
    view: { 
      type: GraphQLInt 
    },
    likes: { 
      type: new GraphQLList(GraphQLString) 
    },
    countPopular: { 
      type: GraphQLInt 
    },
    repostDate: { 
      type: GraphQLString 
    },
    categories: { 
      type: new GraphQLList(GraphQLString) 
    },
    markets: { 
      type: new GraphQLList(GraphQLString) 
    },
    editorPickDate: { 
      type: GraphQLString 
    },
    deleted: { 
      type: GraphQLBoolean 
    },
    variations: { 
      type: new GraphQLList(StuffVariationType) 
    },
    sold: { 
      type: GraphQLBoolean
    },
    soldDate: {
      type: GraphQLString 
    },
    updatedDate: { 
      type: GraphQLString 
    } 
  })
});

const WishStuffType = new GraphQLObjectType({
  name: 'WishStuff',
  fields: () => ({
    stuff: {
      type: CustomWishStuffType,
    },
    createDate: {
      type: GraphQLFloat
    },
    timeDiff: {
      type: GraphQLString,
      resolve: ({ createDate }) => Time.diff(new Date(createDate), new Date)
    }
  })
});

// ,
//   resolve: (wish) => {
//     return new Promise((resolve, reject) => {
//       mongoClient.exec((db) => {
//         const collection = db.collection('stuffs');
//         const cmd = StuffGetLimitInterestCommand(wish.stuff, true, wish.owner);

//           cmd.run(collection, (err, stuff) => {
//             console.log(stuff);
//             err ? reject(err) : resolve(stuff);
//           });
//         });
//       });
//     }


module.exports = {
  WishStuffType
};