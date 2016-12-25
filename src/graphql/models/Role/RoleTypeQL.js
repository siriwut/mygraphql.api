const {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInt
} = require('graphql');

const Role = new GraphQLObjectType({
  name: 'Role',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    perms: { type: new GraphQLList(GraphQLInt) }
  })
});

module.exports = Role;

// const { Registry } = require('graphql-helpers');

// const registry = new Registry();

// registry.createType(`
//   type Role {
//     _id: String
//     name: String
//     perms: [Int]
//   }`
// );

// module.exports = registry.getType('Role');
