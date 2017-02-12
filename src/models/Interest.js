const mongoose = require('mongoose');
const interest = require('../schemas/InterestSchema');

const Interest = mongoose.model('Interest', interest, 'interests');

module.exports = Interest;
