const { GraphQLID, GraphQLString } = require('graphql');
const { OrderTransaction } = require('./OrderTransactionSchema');
const OrderTransactionService = require('../../../services/OrderTransactionService');

module.exports = {
  orderTransaction: {
    type: OrderTransaction,
    args: {
      transactionId: {
        type: GraphQLString
      }
    },
    resolve: OrderTransactionService.findByTransactionId
  }
};
