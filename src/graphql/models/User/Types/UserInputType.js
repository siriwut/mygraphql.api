const {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLInputObjectType
} = require('graphql');


const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    email: {
      type: GraphQLString
    },
    firstname: {
      type: GraphQLString
    },
    lastname: {
      type: GraphQLString
    },
    avatar: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    detail: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    },
    birthday: {
      type: GraphQLString
    }
  })
});

module.exports = UserInput;