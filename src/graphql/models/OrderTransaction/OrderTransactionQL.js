const OrderTransactionQueries = require('./OrderTransactionQueriesQL');
const OrderTransactionType = require('./OrderTransactionTypeQL');

const OrderTransaction = {
  OrderTransactionQueries: OrderTransactionQueries,
  OrderTransactionType: OrderTransactionType
};

module.exports = OrderTransaction;