const OrderQueries = require('./OrderQueriesQL');
const OrderType = require('./OrderTypeQL');

const Order = {
  OrderQueries: OrderQueries,
  OrderType: OrderType
};

module.exports = Order;