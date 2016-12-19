const mongoose = require('mongoose');
const user = require('../schemas/UserSchema');

const User = mongoose.model('User', user);

module.exports = User;

module.exports.findByID = (root, { _id }) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id }, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
};