const User = require('../models/User');

class UserService {
  static create(root, { input }) {
    return new Promise((resolve, reject) => {
      const user = new User(input);

      user.save((err) => {
        err ? reject(err) : resolve(user);
      });
    });
  }

  static getById(root, { _id }) {
    return new Promise((resolve, reject) => {
      User.findOne({ _id }, (err, user) => {
        (err || !user) ? reject(err) : resolve(user);
      });
    });
  }
} 

module.exports = UserService;