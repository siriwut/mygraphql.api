const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const OrderTransactionSchema = new Schema({
  id: String,
  seller: {
    _id: { type: ObjectId, ref: 'User' },
    name: String,
    email: String,
    tel: String,
    logo: String
  },
  stuffs: [{
    _id: { type: ObjectId, ref: 'Stuff' },
    name: String,
    path: String,
    label: String,
    quantity: Number,
    price: Number,
    totalPriceEachCart: Number,
    ownerId: String
  }],
  cartIds: [{ type: ObjectId, ref: 'Cart' }],
  customer: {
    _id: { type: ObjectId, ref: 'User' },
    avatar: String,
    name: String,
    shipping: {
      address: String,
      city: String,
      email: String,
      name: String,
      postalCode: String,
      tel: String
    }
  },
  logistic: {
    provider: String,
    fee: Number,
    trackingNumber: String,
    shippingDate: String
  },
  netQuantity: Number,
  netPrice: Number,
  paymentMethod: String,
  orderStatus: String,
  paymentDate: String,
  confirmDate: String,
  createdDate: Date,
  updatedDate: Date,
  deleted: Boolean,
  remark: String
});

module.exports = OrderTransactionSchema;
