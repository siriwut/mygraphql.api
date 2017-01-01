const { GraphQLID, GraphQLString } = require('graphql');
const { User } = require('./UserSchema');
const UserService = require('../../../services/UserService');

module.exports = {
  user: {
    type: User,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: UserService.getById
  }
};
