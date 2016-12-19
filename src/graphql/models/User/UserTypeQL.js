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
    role: Role
    shop: Shop
    facebook: Facebook
    verifyEmail: Boolean
    addresses: [Address]
    payments: Payments
  }`
);

registry.createType(`
  type Role {
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
