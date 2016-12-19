const { GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const CartType = require('./CartTypeQL');
const CartDB = require('../../../models/Cart');

module.exports = {
  carts: {
    type: new GraphQLList(CartType),
    args: {
      userId: {
        type: GraphQLString
      }
    },
    resolve: CartDB.findByUserID
  }
};
