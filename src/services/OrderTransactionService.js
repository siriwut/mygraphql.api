const OrderTransaction = require('../models/OrderTransaction');

class OrderTransactionService {
  static findByTransactionId(root, { transactionId }) {
    return new Promise((resolve, reject) => {
      OrderTransaction.findOne({ id: transactionId }, (err, orderTransaction) => {
        err ? reject(err) : resolve(orderTransaction);
      });
    });
  }
} 

module.exports = OrderTransactionService;