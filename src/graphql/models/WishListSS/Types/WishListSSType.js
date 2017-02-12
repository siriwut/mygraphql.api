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

const { WishStuffSSType } = require('./WishStuffSSType');

const WishListSSType = new GraphQLList(WishStuffSSType);

module.exports = WishListSSType;