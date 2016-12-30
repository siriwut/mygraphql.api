const { GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const { Order } = require('./OrderSchema');
const OrderDB = require('../../../models/Order');

module.exports = {
  orders: {
    type: new GraphQLList(Order),
    args: {
      userId: {
        type: GraphQLString
      }
    },
    resolve: OrderDB.findByOrderID
  }
};
