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
} = require('./Types');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString 
    },
    username: {
      type: GraphQLString 
    },
    firstname: {
      type: GraphQLString,
      deprecationReason: 'Fuck name'
    },
    lastname: { 
      type: GraphQLString
    },
    avatar: { 
      type: GraphQLString
    },
    country: { 
      type: GraphQLString
    },
    havePassword: { 
      type: GraphQLBoolean
    },
    detail: { 
      type: GraphQLString
    },
    view: { 
      type: GraphQLInt
    },
    password: { 
      type: GraphQLString
    },
    gender: { 
      type: GraphQLString
    },
    birthday: { 
      type: GraphQLString
    },
    role: { 
      type: UserRoleType
    },
    shop: { 
      type: UserShopType
    },
    facebook: { 
      type: UserFacebookType
    },
    verifyEmail: { 
      type: GraphQLBoolean
    },
    addresses: { 
      type: new GraphQLList(UserAddressType)
    },
    payments: { 
      type: UserPaymentType
    },
    type: {
      type: GraphQLString
    }
  })
});

module.exports = UserType;