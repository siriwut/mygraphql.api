const { GraphQLID, GraphQLString } = require('graphql');
const OrderTransactionType = require('./OrderTransactionTypeQL');
const OrderTransactionDB = require('../../../models/OrderTransaction');

module.exports = {
  orderTransaction: {
    type: OrderTransactionType,
    args: {
      transactionId: {
        type: GraphQLString
      }
    },
    resolve: OrderTransactionDB.findByOrderID
  }
};
