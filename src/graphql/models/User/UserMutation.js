const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull 
} = require('graphql'); 

const { User, UserInput } = require('./UserSchema');
const UserService = require('../../../services/UserService');

module.exports = {
  createUser: {
    type: User,
    args: {
      input: {
        type: UserInput
      }
    },
    resolve: UserService.create
  }
};
