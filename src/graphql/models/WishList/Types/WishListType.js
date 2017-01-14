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

const { WishStuffType } = require('./WishStuffType');

const WishListType = new GraphQLList(WishStuffType);

module.exports = WishListType;