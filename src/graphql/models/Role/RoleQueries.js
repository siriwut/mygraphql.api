const { GraphQLID, GraphQLString } = require('graphql');
const { Role } = require('./RoleSchema');
const RoleService = require('../../../services/RoleService');

module.exports = {
  role: {
    type: Role,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: RoleService.findById
  }
};
