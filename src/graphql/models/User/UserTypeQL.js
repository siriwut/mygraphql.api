const { Registry } = require('graphql-helpers');

const registry = new Registry();

registry.createType(`
  type User {
    _id: String
    email: String
    firstname: String
    lastname: String
    avatar: String
    country: String
    havePassword: Boolean
    detail: String
    view: Int
    password: String
    gender: String
    birthday: String
    role: UserRole
    shop: Shop
    facebook: Facebook
    verifyEmail: Boolean
    addresses: [Address]
    payments: Payments
  }`
);

registry.createType(`
  type UserRole {
    id: String
    name: String
  }`
);

registry.createType(`
  type Shop {
    name: String
    tel: Int
    website: String
    facebook: String
    instagram: String
    policy: String
    address: String
    idCard: String
    verified: Boolean
    requestDate: String
    status: String
    cover: String
    paymentPolicy: String
    shippingPolicy: String
    refundPolicy: String
    headline: String
    brandStory: String
    prettyUrl: String
    brandImages: [BrandImage]
    logo: String
    verifiedDate: String
    welcomeMessage: String
  }`
);

registry.createType(`
  type Facebook {
    id: String
    email: String
    token: String
    page: Page
  }`
);

registry.createType(`
  type Address {
    _id: String
    name: String
    address: String
    email: String
    tel: String
    city: String
    postalCode: String
  }`
);

registry.createType(`
  type Payments {
    omise: Omise
  }`
);

registry.createType(`
  type BrandImage {
    path: String
    caption: String
  }`
);

registry.createType(`
  type Page {
    id: String
    name: String
    token: String
    enable: Boolean
  }`
);

registry.createType(`
  type Card {
    lastDigits: String
    cardId: String
  }`
);

registry.createType(`
  type Omise {
    cards:[Card]
    customerId: String
    defaultCard: String
  }`
);

module.exports = registry.getType('User');

// const {
//   GraphQLBoolean,
//   GraphQLString,
//   GraphQLObjectType,
//   GraphQLNonNull,
//   GraphQLList,
//   GraphQLID,
//   GraphQLInt
// } = require('graphql');


// const CardType = new GraphQLObjectType({
//   name: 'CardType',
//   fields: () => ({
//     lastDigits: { type: GraphQLString },
//     cardId: { type: GraphQLString }
//   })
// });

// const OmiseType = new GraphQLObjectType({
//   name: 'OmiseType',
//   fields: () => ({
//     cards: { type: new GraphQLList(CardType) },
//     customerId: { type: GraphQLString },
//     defaultCard: { type: GraphQLString }
//   })
// });

// const UserPaymentType = new GraphQLObjectType({
//   name: 'UserPaymentType',
//   fields: () => ({
//     omise: { type: OmiseType }
//   })
// });

// const UserAddressType = new GraphQLObjectType({
//   name: 'UserAddressType',
//   fields: () => ({
//     _id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     address: { type: GraphQLString },
//     email: { type: GraphQLString },
//     tel: { type: GraphQLString },
//     city: { type: GraphQLString },
//     postalCode: { type: GraphQLString }
//   })
// });

// const PageType = new GraphQLObjectType({
//   name: 'PageType',
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     token: { type: GraphQLString },
//     enable: { type: GraphQLBoolean }
//   })
// });

// const FacebookType = new GraphQLObjectType({
//   name: 'FacebookType',
//   fields: () => ({
//     id: { type: GraphQLString },
//     email: { type: GraphQLString },
//     token: { type: GraphQLString },
//     page: { type: PageType }
//   })
// });

// const BrandImageType = new GraphQLObjectType({
//   name: 'BrandImageType',
//   fields: () => ({
//     path: { type: GraphQLString },
//     caption: { type: GraphQLString }
//   })
// });

// const UserShopType = new GraphQLObjectType({
//   name: 'UserShopType',
//   fields: () => ({
//     name: { type: GraphQLString },
//     tel: { type: GraphQLInt },
//     website: { type: GraphQLString },
//     facebook: { type: GraphQLString },
//     instagram: { type: GraphQLString },
//     policy: { type: GraphQLString },
//     address: { type: GraphQLString },
//     idCard: { type: GraphQLString },
//     verified: { type: GraphQLBoolean },
//     requestDate: { type: GraphQLString },
//     status: { type: GraphQLString },
//     cover: { type: GraphQLString },
//     paymentPolicy: { type: GraphQLString },
//     shippingPolicy: { type: GraphQLString },
//     refundPolicy: { type: GraphQLString },
//     headline: { type: GraphQLString },
//     brandStory: { type: GraphQLString },
//     prettyUrl: { type: GraphQLString },
//     brandImages: { type: new GraphQLList(BrandImageType) },
//     logo: { type: GraphQLString },
//     verifiedDate: { type: GraphQLString },
//     welcomeMessage: { type: GraphQLString }
//   })
// });

// const UserRoleType = new GraphQLObjectType({
//   name: 'UserRoleType',
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString }
//   })
// });

// const User = new GraphQLObjectType({
//   name: 'User',
//   fields: () => ({
//     _id: { type: GraphQLString },
//     email: { type: GraphQLString },
//     firstname: { type: GraphQLString },
//     lastname: { type: GraphQLString },
//     avatar: { type: GraphQLString },
//     country: { type: GraphQLString },
//     havePassword: { type: GraphQLBoolean },
//     detail: { type: GraphQLString },
//     view: { type: GraphQLInt },
//     password: { type: GraphQLString },
//     gender: { type: GraphQLString },
//     birthday: { type: GraphQLString },
//     role: { type: UserRoleType },
//     shop: { type: UserShopType },
//     facebook: { type: FacebookType },
//     verifyEmail: { type: GraphQLBoolean },
//     addresses: { type: new GraphQLList(UserAddressType) },
//     payments: { type: UserPaymentType }
//   })
// });

// module.exports = User;
