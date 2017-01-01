const Order = require('../models/Order');

class OrderService {
  static findByOrderId (root, { userId }) {
    return new Promise((resolve, reject) => {
      Order.find({ 'user._id': userId }, (err, orders) => {
        err ? reject(err) : resolve(orders);
      });
    });
  }
}

module.exports = OrderService;