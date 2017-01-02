const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const InterestSchema = new Schema({
  countFollowers: Number,
  country: String,
  deletedWishes: [{
    stuff: { type: ObjectId, ref: 'Stuff' },
    createDate: Number,
    deletedDate: Number
  }],
  followers: [{ type: ObjectId, ref: 'User' }],
  following: [{ type: ObjectId, ref: 'User' }],
  unfollow: [{ type: ObjectId, ref: 'User' }],
  user: String,
  wishes: [{
    stuff: { type: ObjectId, ref: 'Stuff' },
    createDate: Number
  }]
});

module.exports = InterestSchema;
