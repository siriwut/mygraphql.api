const { GraphQLID, GraphQLString } = require('graphql');
const { OrderTransaction } = require('./OrderTransactionSchema');
const OrderTransactionDB = require('../../../models/OrderTransaction');

module.exports = {
  orderTransaction: {
    type: OrderTransaction,
    args: {
      transactionId: {
        type: GraphQLString
      }
    },
    resolve: OrderTransactionDB.findByTransactionID
  }
};
