const Stuff = require('../models/Stuff');

class StuffService {
  static findById(root, { _id }) {
    return new Promise((resolve, reject) => {
      Stuff.findOne({ _id }, (err, stuff) => {
        err ? reject(err) : resolve(stuff);
      });
    });
  }

  static findFullById(root, { _id }) {
    return new Promise((resolve, reject) => {
      Stuff
        .findOne({ _id })
        .populate('owner')
        .populate('wishes')
        .populate('likes')
        .exec((err, stuff) => {
          err ? reject(err) : resolve(stuff);
        });
      });
  }
} 

module.exports = StuffService;