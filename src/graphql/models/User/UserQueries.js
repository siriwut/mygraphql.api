const { GraphQLID, GraphQLString } = require('graphql');
const { User } = require('./UserSchema');
const UserDB = require('../../../models/User');

module.exports = {
  user: {
    type: User,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: UserDB.getById
  }
};
