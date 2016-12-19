const { Registry } = require('graphql-helpers');

const registry = new Registry();

registry.createType(`
  type Role {
    _id: String
    name: String
    perms: [Int]
  }`
);

module.exports = registry.getType('Role');
