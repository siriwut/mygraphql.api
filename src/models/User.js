const mongoose = require('mongoose');
const user = require('../schemas/UserSchema');

const User = mongoose.model('User', user);

module.exports = User;

module.exports.create = (root, { input }) => {
  return new Promise((resolve, reject) => {
    const user = new User(input);

    user.save((err) => {
      err ? reject(err) : resolve(user);
    });
  });
};

module.exports.getById = (root, { _id }) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id }, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
};