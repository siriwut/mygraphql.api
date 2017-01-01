const mongoose = require('mongoose');
const role = require('../schemas/RoleSchema');

const Role = mongoose.model('Role', role);

module.exports = Role;