const mongoose = require('mongoose');
const stuff = require('../schemas/StuffSchema');

const Stuff = mongoose.model('Stuff', stuff);

module.exports = Stuff;
