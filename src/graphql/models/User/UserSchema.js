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


const UserPaymentOmiseCard = new GraphQLObjectType({
  name: 'UserPaymentOmiseCard',
  fields: () => ({
    lastDigits: { type: GraphQLString },
    cardId: { type: GraphQLString }
  })
});

const UserPaymentOmise = new GraphQLObjectType({
  name: 'UserPaymentOmise',
  fields: () => ({
    cards: { type: new GraphQLList(UserPaymentOmiseCard) },
    customerId: { type: GraphQLString },
    defaultCard: { type: GraphQLString }
  })
});

const UserPayment = new GraphQLObjectType({
  name: 'UserPayment',
  fields: () => ({
    omise: { type: UserPaymentOmise }
  })
});

const UserAddress = new GraphQLObjectType({
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

const UserFacebookPage = new GraphQLObjectType({
  name: 'UserFacebookPage',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    token: { type: GraphQLString },
    enable: { type: GraphQLBoolean }
  })
});

const UserFacebook = new GraphQLObjectType({
  name: 'UserFacebook',
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString },
    page: { type: UserFacebookPage }
  })
});

const UserBrandImage = new GraphQLObjectType({
  name: 'UserBrandImage',
  fields: () => ({
    path: { type: GraphQLString },
    caption: { type: GraphQLString }
  })
});

const UserShop = new GraphQLObjectType({
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
    brandImages: { type: new GraphQLList(UserBrandImage) },
    logo: { type: GraphQLString },
    verifiedDate: { type: GraphQLString },
    welcomeMessage: { type: GraphQLString }
  })
});

const UserRole = new GraphQLObjectType({
  name: 'UserRole',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

/** User Schema **/

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString 
    },
    firstname: {
      type: GraphQLString
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
      type: UserRole
    },
    shop: { 
      type: UserShop
    },
    facebook: { 
      type: UserFacebook
    },
    verifyEmail: { 
      type: GraphQLBoolean
    },
    addresses: { 
      type: new GraphQLList(UserAddress)
    },
    payments: { 
      type: UserPayment
    }
  })
});

/** User Input **/

const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    email: {
      type: GraphQLString
    },
    firstname: {
      type: GraphQLString
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
    detail: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    }
  })
});

module.exports = { 
  User,
  UserInput
};


// const { Registry } = require('graphql-helpers');

// const registry = new Registry();

// registry.createType(`
//   type User {
//     _id: String
//     email: String
//     username: String
//     firstname: String
//     lastname: String
//     avatar: String
//     country: String
//     havePassword: Boolean
//     detail: String
//     view: Int
//     password: String
//     gender: String
//     birthday: String
//     role: UserRole
//     shop: Shop
//     facebook: Facebook
//     verifyEmail: Boolean
//     addresses: [Address]
//     payments: Payments
//   }`
// );

// registry.createType(`
//   type UserRole {
//     id: String
//     name: String
//   }`
// );

// registry.createType(`
//   type Shop {
//     name: String
//     tel: Int
//     website: String
//     facebook: String
//     instagram: String
//     policy: String
//     address: String
//     idCard: String
//     verified: Boolean
//     requestDate: String
//     status: String
//     cover: String
//     paymentPolicy: String
//     shippingPolicy: String
//     refundPolicy: String
//     headline: String
//     brandStory: String
//     prettyUrl: String
//     brandImages: [BrandImage]
//     logo: String
//     verifiedDate: String
//     welcomeMessage: String
//   }`
// );

// registry.createType(`
//   type Facebook {
//     id: String
//     email: String
//     token: String
//     page: Page
//   }`
// );

// registry.createType(`
//   type Address {
//     _id: String
//     name: String
//     address: String
//     email: String
//     tel: String
//     city: String
//     postalCode: String
//   }`
// );

// registry.createType(`
//   type Payments {
//     omise: Omise
//   }`
// );

// registry.createType(`
//   type BrandImage {
//     path: String
//     caption: String
//   }`
// );

// registry.createType(`
//   type Page {
//     id: String
//     name: String
//     token: String
//     enable: Boolean
//   }`
// );

// registry.createType(`
//   type Card {
//     lastDigits: String
//     cardId: String
//   }`
// );

// registry.createType(`
//   type Omise {
//     cards:[Card]
//     customerId: String
//     defaultCard: String
//   }`
// );

// module.exports = registry.getType('User');
