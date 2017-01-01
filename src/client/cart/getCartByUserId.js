const { executeGetQuery } = require('../client');

const userId = '4f88f907213200ba6b000001';

const graphQlQuery = `
  query getCartByUserId($userId: String) {
    carts(userId: $userId) {
      _id
      user
      seller {
        _id
        logo
        name        
      }
      stuff {
        _id
        path
        name
        market        
      }
      label
      price
      quantity
      createdDate
      status
      updatedDate      
    }
  }
`;

executeGetQuery({
  query: graphQlQuery,
  variables: {
    userId
  }
});