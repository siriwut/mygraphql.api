const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const CartSchema = new Schema({
  user: { type: String, ref: 'User' },
  seller: {
    _id: { type: ObjectId, ref: 'User' },
    logo: String,
    name: String
  },
  stuff: {
    _id: { type: ObjectId, ref: 'Stuff' },
    path: String,
    name: String,
    market: String
  },
  label: String,
  price: Number,
  quantity: Number,
  createdDate: Date,
  status: String,
  updatedDate: Date
});

module.exports = CartSchema;
