const { Registry } = require('graphql-helpers');

const registry = new Registry();

registry.createType(`
  type OrderTransaction {
    _id: String
    id: String
    seller: OrderTransactionSeller
    stuffs: [OrderTransactionStuff]
    cartIds: [String]
    customer: OrderTransactionCustomer
    logistic: OrderTransactionLogistic
    netQuantity: Float
    netPrice: Int
    paymentMethod: String
    orderStatus: String
    paymentDate: String
    confirmDate: String
    createdDate: String
    updatedDate: String
    deleted: Boolean
    remark: String  
  }`
);

registry.createType(`
  type OrderTransactionSeller {
    _id: String
    name: String
    email: String
    tel: String
    logo: String
  }
`);

registry.createType(`
  type OrderTransactionStuff {
    _id: String
    name: String
    path: String
    label: String
    quantity: Int
    price: Float
    totalPriceEachCart: Float
    ownerId: String
  }
`);

registry.createType(`
  type OrderTransactionCustomer {
    _id: String
    avatar: String
    name: String
    shipping: OrderTransactionShipping
  } 
`);

registry.createType(`
  type OrderTransactionShipping {
    address: String
    city: String
    email: String
    name: String
    postalCode: String
    tel: String
  }
`);

registry.createType(`
  type OrderTransactionLogistic {
    provider: String
    fee: Float
    trackingInt: String
    shippingDate: String
  }
`);

module.exports = registry.getType('OrderTransaction');
