const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const StuffSchema = new Schema({
  name: String,
  category: String,
  description: String,
  location: {
    address: String,
    spot: [Number]
  },
  market: String,
  owner: { type: ObjectId, ref: 'User' },
  path: String,
  price: Number,
  quantity: Number,
  category: String,
  tags: [String],
  createDate: Number,
  market: String,
  images: [{ 
    path: String,
    size: {
      width: Number,
      height: Number
    }
  }],
  wishes: [{ type: ObjectId, ref: 'User' }],
  view: Number,
  likes: [{ type: ObjectId, ref: 'User' }],
  countPopular: Number,
  repostDate: Number,
  categories: [String],
  markets: [String],
  editorPickDate: Number,
  deleted: Boolean,
  variations: [{
    label: String,
    price: Number,
    quantity: Number
  }],
  sold: Boolean,
  soldDate: Number,
  updatedDate: Number
});

module.exports = StuffSchema;
