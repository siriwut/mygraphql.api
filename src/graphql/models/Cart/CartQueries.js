const { GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const { Cart } = require('./CartSchema');
const CartService = require('../../../services/CartService');

module.exports = {
  carts: {
    type: new GraphQLList(Cart),
    args: {
      userId: {
        type: GraphQLString
      }
    },
    resolve: CartService.findByUserId
  }
};
