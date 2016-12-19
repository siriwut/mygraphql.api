const { Registry } = require('graphql-helpers');

const registry = new Registry();

registry.createType(`
  type Order {
    _id: String
    stuff: OrderStuff
    id: String
    shipping: OrderShipping
    paymentStatus: String
    orderStatus: String
    shopStatus: String
    payment: OrderPayment
    createdDate: String
    paymentDate: String  
  }`
);

registry.createType(`
  type OrderStuff {
    _id: String
    path: String
    price: Int
    name: String
    sku: String
    description: String
    merchant: OrderMerchant
  }
`);

registry.createType(`
  type OrderMerchant {
    name: String
    tel: String
    email: String
  }
`);

registry.createType(`
  type OrderShipping {
    name: String
    address: String
    email: String
    tel: String
    city: String
    postalCode: String
    tracking: String
  }
`);


registry.createType(`
  type OrderPayment {
    description: String
    amount: Int
    currency: String
    chargeId: String
    cardId: String
  }
`);

module.exports = registry.getType('Order');
