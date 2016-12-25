const mongoose = require('mongoose');
const stuff = require('../schemas/StuffSchema');

const Stuff = mongoose.model('Stuff', stuff);

module.exports = Stuff;

module.exports.findByID = (root, { _id }) => {
  return new Promise((resolve, reject) => {
    Stuff.findOne({ _id }, (err, stuff) => {
      err ? reject(err) : resolve(stuff);
    });
  });
};