const { GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const { Cart } = require('./CartSchema');
const CartDB = require('../../../models/Cart');

module.exports = {
  carts: {
    type: new GraphQLList(Cart),
    args: {
      userId: {
        type: GraphQLString
      }
    },
    resolve: CartDB.findByUserID
  }
};
