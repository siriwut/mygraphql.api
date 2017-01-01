const Role = require('../models/Role');

class RoleService {
  static findById(root, { _id }) {
    return new Promise((resolve, reject) => {
      Role.findOne({ _id }, (err, role) => {
        err ? reject(err) : resolve(role);
      });
    });
  }
} 

module.exports = RoleService;