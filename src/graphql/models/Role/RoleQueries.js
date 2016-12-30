const { GraphQLID, GraphQLString } = require('graphql');
const { Role } = require('./RoleSchema');
const RoleDB = require('../../../models/Role');

module.exports = {
  role: {
    type: Role,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: RoleDB.findByID
  }
};
