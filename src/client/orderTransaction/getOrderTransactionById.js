const { executeGetQuery } = require('../client');

const transactionId = '28818664648570';

const orderTransactionQuery = `
  query {
    orderTransaction(transactionId:"${transactionId}") {
      _id
      id
      seller {
        _id
        name
        email
        tel
        logo
      }
      stuffs {
        _id
        name
        path
        label
        quantity
        price
        totalPriceEachCart
        ownerId
      }
      cartIds
      customer {
        _id
        avatar
        name
        shipping {
          address
          city
          email
          name
          postalCode
          tel
        }
      }
      logistic {
        provider
        fee
        trackingNumber
        shippingDate
      }
      netQuantity
      netPrice
      paymentMethod
      orderStatus
      paymentDate
      confirmDate
      createdDate
      updatedDate
      deleted
      remark 
    }
  }
`;

executeGetQuery(orderTransactionQuery);