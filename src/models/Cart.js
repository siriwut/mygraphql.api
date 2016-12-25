const mongoose = require('mongoose');
const cart = require('../schemas/CartSchema');

const Cart = mongoose.model('Cart', cart);

module.exports = Cart;

module.exports.findByUserID = (root, { userId }) => {
  return new Promise((resolve, reject) => {
    Cart.find({ user: userId }, (err, carts) => {
      err ? reject(err) : resolve(carts);
    });
  });
};