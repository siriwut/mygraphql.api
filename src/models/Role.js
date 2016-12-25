const mongoose = require('mongoose');
const role = require('../schemas/RoleSchema');

const Role = mongoose.model('Role', role);

module.exports = Role;

module.exports.findByID = (root, { _id }) => {
  return new Promise((resolve, reject) => {
    Role.findOne({ _id }, (err, role) => {
      err ? reject(err) : resolve(role);
    });
  });
};