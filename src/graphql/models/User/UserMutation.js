const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull 
} = require('graphql'); 

const { User, UserInput } = require('./UserSchema');
const UserDB = require('../../../models/User');

module.exports = {
  createUser: {
    type: User,
    args: {
      input: {
        type: UserInput
      }
    },
    resolve: UserDB.create
  }
};
