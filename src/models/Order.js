const mongoose = require('mongoose');
const order = require('../schemas/OrderSchema');

const Order = mongoose.model('Order', order);

module.exports = Order;

module.exports.findByOrderID = (root, { userId }) => {
  return new Promise((resolve, reject) => {
    Order.find({ 'user._id': userId }, (err, orders) => {
      err ? reject(err) : resolve(orders);
    });
  });
};