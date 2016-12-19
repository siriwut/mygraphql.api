const { GraphQLID, GraphQLString } = require('graphql');
const RoleType = require('./RoleTypeQL');
const RoleDB = require('../../../models/Role');

module.exports = {
  role: {
    type: RoleType,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: RoleDB.findByID
  }
};
