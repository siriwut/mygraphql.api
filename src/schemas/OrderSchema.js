const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const OrderSchema = new Schema({
  stuff: {
    _id: { type: ObjectId, ref: 'Stuff' },
    path: String,
    price: Number,
    name: String,
    sku: String,
    description: String,
    merchant: {
      name: String,
      tel: String,
      email: String
    }
  },
  id: String,
  shipping: {
    name: String,
    address: String,
    email: String,
    tel: String,
    city: String,
    postalCode: String,
    tracking: String
  },
  paymentStatus: String,
  orderStatus: String,
  shopStatus: String,
  payment: {
    description: String,
    amount: Number,
    currency: String,
    chargeId: String,
    cardId: String
  },
  createdDate: Date,
  paymentDate: Date
});

module.exports = OrderSchema;
