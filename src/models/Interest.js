const mongoose = require('mongoose');
const interest = require('../schemas/InterestSchema');

const Interest = mongoose.model('Interest', interest);

module.exports = Interest;
