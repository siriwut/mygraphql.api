const { GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const { Order } = require('./OrderSchema');
const OrderService = require('../../../services/OrderService');

module.exports = {
  orders: {
    type: new GraphQLList(Order),
    args: {
      userId: {
        type: GraphQLString
      }
    },
    resolve: OrderService.findByOrderId
  }
};
