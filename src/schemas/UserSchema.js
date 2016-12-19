const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const UserSchema = new Schema({
  email: String,
  firstname: String,
  lastname: String,
  avatar: String,
  country: String,
  havePassword: Boolean,
  detail: String,
  view: Number,
  password: String,
  gender: String,
  birthday: String,
  role: {
    id: { type: ObjectId, ref: 'Role' },
    name: String
  },
  shop: {
    name: String,
    tel: Number,
    website: String,
    facebook: String,
    instagram: String,
    policy: String,
    address: String,
    idCard: String,
    verified: Boolean,
    requestDate: Date,
    status: String,
    cover: String,
    paymentPolicy: String,
    shippingPolicy: String,
    refundPolicy: String,
    headline: String,
    brandStory: String,
    prettyUrl: String,
    brandImages: [{
      path: String,
      caption: String
    }],
    logo: String,
    verifiedDate: Date,
    welcomeMessage: String
  },
  facebook: {
    id: String,
    email: String,
    token: String,
    page: {
      id: String,
      name: String,
      token: String,
      enable: Boolean
    }
  },
  verifyEmail: Boolean,
  addresses: [
    {
      _id: String,
      name: String,
      address: String,
      email: String,
      tel: String,
      city: String,
      postalCode: String
    }
  ],
  payments: {
    omise: {
      cards: [
        {
          lastDigits: String,
          cardId: String
        }
      ],
      customerId: String,
      defaultCard: String
    }
  }
});

module.exports = UserSchema;
