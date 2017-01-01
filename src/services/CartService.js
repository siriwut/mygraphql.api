const Cart = require('../models/Cart');

class CartService {
  static findByUserId (root, { userId }) {
    return new Promise((resolve, reject) => {
      Cart.find({ user: userId }, (err, carts) => {
        err ? reject(err) : resolve(carts);
      });
    });
  }
}

module.exports = CartService;