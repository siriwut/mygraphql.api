const mongoose = require('mongoose');
const role = require('../schemas/RoleSchema');

module.exports = mongoose.model('Role', role);