const { executeGetQuery } = require('../client');

const stuffId = '4f48e47c8c47fd6507000010';

const stuffQuery = `
  query getStuffById($stuffId: String) {
    stuff(_id: $stuffId) {
      name
      category
      description
      location {
        address
        spot
      }
      market
      ownerId
      owner {
        email
        firstname
      }
      path
      images {
        path
        size {
          width
          height
        }
      }
      wishes
      markets
      editorPickDate
      deleted
      variations {
        label
        price
        quantity
      }
      sold
    }
  }
`;

executeGetQuery({
  query: stuffQuery,
  variables: {
    stuffId
  }
});
