const { executeGetQuery } = require('../client');

const stuffId = '50c8072ded6c52a304000001';

const stuffQuery = `
  query {
    stuff(_id: "${stuffId}") {
      name
      category
      description
      location {
        address
        spot
      }
      market
      owner
      path
      price
      quantity
      category
      tags
      owner
      createDate
      market
      images {
        path
        size {
          width
          height
        }
      }
      wishes
      view
      likes
      unlikes
      countPopular
      repostDate
      categories
      markets
      editorPickDate
      deleted
      variations {
        label
        price
        quantity
      }
      sold
      soldDate
      checkOwner
      updatedDate
    }
  }
`;

executeGetQuery(stuffQuery);