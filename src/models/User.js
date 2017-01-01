const mongoose = require('mongoose');
const user = require('../schemas/UserSchema');

const User = mongoose.model('User', user);

module.exports = User;
