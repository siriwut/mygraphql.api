const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList 
} = require('graphql');
const { WishList } = require('./WishListSchema');
const InterestService = require('../../../services/InterestService');

module.exports = {
  wishList: {
    type: WishList,
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
    resolve: InterestService.findWishListByUserId
  }
};
