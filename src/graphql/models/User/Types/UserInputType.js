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
      type: new GraphQLNonNull(GraphQLString)
    },
    firstname: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString)
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
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    gender: {
      type: new GraphQLNonNull(GraphQLString)
    },
    birthday: {
      type: GraphQLString
    }
  })
});

module.exports = UserInput;