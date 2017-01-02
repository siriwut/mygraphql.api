const Interest = require('../models/Interest');

class InterestService {
  static findByUserId (root, { userId }) {
    return new Promise((resolve, reject) => {
      Interest
          .findOne({
            user: userId
          })
          .select({
            deletedWishes: 0,
            followers: 0,
            following: 0,
            unfollow: 0,
            wishes: 0
          })
          .exec((err, interest) => {
            err ? reject(err) : resolve(interest);
          });
    });
  }
}

module.exports = InterestService;