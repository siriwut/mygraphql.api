const { Registry } = require('graphql-helpers');

const registry = new Registry();

registry.createType(`
  type Cart {
    _id: String
    user: String
    seller: CartSeller
    stuff: CartStuff
    label: String
    price: Float
    quantity: Int
    createdDate: String
    status: String
    updatedDate: String
  }`
);

registry.createType(`
  type CartSeller {
    _id: String
    logo: String
    name: String
  }`
);

registry.createType(`
  type CartStuff {
    _id: String
    path: String
    name: String
    market: String
  }
`);

module.exports = registry.getType('Cart');
