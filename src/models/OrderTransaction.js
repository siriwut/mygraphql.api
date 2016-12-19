const mongoose = require('mongoose');
const orderTransaction = require('../schemas/OrderTransactionSchema');

var OrderTransaction = mongoose.model('OrderTransaction', orderTransaction);

module.exports = OrderTransaction;

module.exports.findByOrderTransactionID = (root, { transactionId }) => {
  return new Promise((resolve, reject) => {
    OrderTransaction.find({ id: transactionId }, (err, orderTransactions) => {
      err ? reject(err) : resolve(orderTransactions);
    });
  });
};