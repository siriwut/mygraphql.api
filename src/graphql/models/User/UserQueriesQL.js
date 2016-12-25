const { GraphQLID, GraphQLString } = require('graphql');
const UserType = require('./UserTypeQL');
const UserDB = require('../../../models/User');

module.exports = {
  user: {
    type: UserType,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: UserDB.findByID
  }
};
