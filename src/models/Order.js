const mongoose = require('mongoose');
const order = require('../schemas/OrderSchema');

const Order = mongoose.model('Order', order);

module.exports = Order;

module.exports.findByOrderID = (root, { orderId }) => {
  return new Promise((resolve, reject) => {
    Order.find({ id: orderId }, (err, orders) => {
      err ? reject(err) : resolve(orders);
    });
  });
};