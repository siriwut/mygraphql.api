const mongoose = require('mongoose');
const order = require('../schemas/OrderSchema');

const Order = mongoose.model('Order', order);

module.exports = Order;