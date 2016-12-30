const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const orderTransaction = require('../schemas/OrderTransactionSchema');

const collectionName = 'orderTransactions';// specify only two or more words collection name

const OrderTransaction = mongoose.model('OrderTransaction', orderTransaction, collectionName);

module.exports = OrderTransaction;

module.exports.findByTransactionID = (root, { transactionId }) => {
  return new Promise((resolve, reject) => {
    OrderTransaction.findOne({ id: transactionId }, (err, orderTransaction) => {
      err ? reject(err) : resolve(orderTransaction);
    });
  });
};