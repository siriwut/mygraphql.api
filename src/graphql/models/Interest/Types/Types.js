const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = require('graphql');

const { Stuff } = require('../../Stuff/StuffSchema');

const StuffType = Stuff;

const InterestDeletedWishType = new GraphQLObjectType({
  name: 'InterestDeletedWish',
  fields: () => ({
    stuff: {
      type: StuffType
    },
    createDate: {
      type: GraphQLFloat
    },
    deletedDate: {
      type: GraphQLFloat
    }
  })
});

const WishType = new GraphQLObjectType({
  name: 'Wish',
  fields: () => ({
    stuff: {
      type: StuffType
    },
    createDate: {
      type: GraphQLFloat
    }
  })
});


module.exports = {
  InterestDeletedWishType,
  WishType
};