const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList 
} = require('graphql');
const { WishListSS } = require('./WishListSSSchema');
const InterestSSService = require('../../../services/InterestSSService');

module.exports = {
  wishListSS: {
    type: WishListSS,
    args: {
      userId: {
        type: GraphQLString
      },
      page: {
        type: GraphQLInt,
        defaultValue: 0
      },
      limit: {
        type: GraphQLInt,
        defaultValue: 5
      }
    },
    resolve: InterestSSService.findWishListByUserId
  }
};
