const { GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const OrderType = require('./OrderTypeQL');
const OrderDB = require('../../../models/Order');

module.exports = {
  orders: {
    type: new GraphQLList(OrderType),
    args: {
      orderId: {
        type: GraphQLString
      }
    },
    resolve: OrderDB.findByOrderID
  }
};
