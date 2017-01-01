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


const UserPaymentOmiseCardType = new GraphQLObjectType({
  name: 'UserPaymentOmiseCard',
  fields: () => ({
    lastDigits: { type: GraphQLString },
    cardId: { type: GraphQLString }
  })
});

const UserPaymentOmiseType = new GraphQLObjectType({
  name: 'UserPaymentOmise',
  fields: () => ({
    cards: { type: new GraphQLList(UserPaymentOmiseCardType) },
    customerId: { type: GraphQLString },
    defaultCard: { type: GraphQLString }
  })
});

const UserPaymentType = new GraphQLObjectType({
  name: 'UserPayment',
  fields: () => ({
    omise: { type: UserPaymentOmiseType }
  })
});

const UserAddressType = new GraphQLObjectType({
  name: 'UserAddress',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    email: { type: GraphQLString },
    tel: { type: GraphQLString },
    city: { type: GraphQLString },
    postalCode: { type: GraphQLString }
  })
});

const UserFacebookPageType = new GraphQLObjectType({
  name: 'UserFacebookPage',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    token: { type: GraphQLString },
    enable: { type: GraphQLBoolean }
  })
});

const UserFacebookType = new GraphQLObjectType({
  name: 'UserFacebook',
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString },
    page: { type: UserFacebookPageType }
  })
});

const UserBrandImageType = new GraphQLObjectType({
  name: 'UserBrandImage',
  fields: () => ({
    path: { type: GraphQLString },
    caption: { type: GraphQLString }
  })
});

const UserShopType = new GraphQLObjectType({
  name: 'UserShop',
  fields: () => ({
    name: { type: GraphQLString },
    tel: { type: GraphQLInt },
    website: { type: GraphQLString },
    facebook: { type: GraphQLString },
    instagram: { type: GraphQLString },
    policy: { type: GraphQLString },
    address: { type: GraphQLString },
    idCard: { type: GraphQLString },
    verified: { type: GraphQLBoolean },
    requestDate: { type: GraphQLString },
    status: { type: GraphQLString },
    cover: { type: GraphQLString },
    paymentPolicy: { type: GraphQLString },
    shippingPolicy: { type: GraphQLString },
    refundPolicy: { type: GraphQLString },
    headline: { type: GraphQLString },
    brandStory: { type: GraphQLString },
    prettyUrl: { type: GraphQLString },
    brandImages: { type: new GraphQLList(UserBrandImageType) },
    logo: { type: GraphQLString },
    verifiedDate: { type: GraphQLString },
    welcomeMessage: { type: GraphQLString }
  })
});

const UserRoleType = new GraphQLObjectType({
  name: 'UserRole',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

module.exports = {
  UserPaymentOmiseCardType,
  UserPaymentOmiseType,
  UserPaymentType,
  UserAddressType,
  UserFacebookPageType,
  UserFacebookType,
  UserBrandImageType,
  UserShopType,
  UserRoleType
};