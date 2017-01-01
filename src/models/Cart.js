const mongoose = require('mongoose');
const cart = require('../schemas/CartSchema');

const Cart = mongoose.model('Cart', cart);

module.exports = Cart;
