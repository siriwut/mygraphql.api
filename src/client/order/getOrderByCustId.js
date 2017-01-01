const { executeGetQuery } = require('../client');

const customerId = '4f88f907213200ba6b000001';

const orderQuery = `
  query getOrderByCustId($customerId: String) {
    order(userId: $customerId) {
      id
      stuff {
        _id
        path
        price
        name
        sku
        description
        merchant {
          name
          tel
          email
        }
      }
      shipping {
        name
        address
        email
        tel
        city
        postalCode
        tracking
      }
      paymentStatus
      orderStatus
      shopStatus
      user {
        _id
        avatar
        email
        firstname
        lastname
      }
      payment {
        description
        amount
        currency
        chargeId
        cardId
      }
      createdDate
      paymentDate
    }
  }
`;

executeGetQuery({ 
  query: orderQuery,
  variables: {
    customerId
  }
});