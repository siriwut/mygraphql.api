const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

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
            (err || !interest) ? reject(err) : resolve(interest);
          });
    });
  }

  static findWishListByUserId (root, { userId, page, limit }) {
    return new Promise((resolve, reject) => {
      const skip = page * limit;

      Interest
          .findOne({
            user: userId
          }, { wishes: { $slice: [skip, limit] } })
          .populate('wishes.stuff')
          .exec((err, interest) => {
            (err || !interest) ? reject(err) : resolve(interest.wishes);
          });
    });
  }
}

module.exports = InterestService;