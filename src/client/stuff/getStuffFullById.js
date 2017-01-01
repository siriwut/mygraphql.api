const { executeGetQuery } = require('../client');

const stuffId = '50c8072ded6c52a304000001';

const userField  = `      
  _id
  email
  firstname
  lastname
  avatar
  country
  havePassword
  detail
  view
  password
  gender
  birthday
  role {
    id
    name
  }
  shop {
    name
    tel
    website
    facebook
    instagram
    policy
    address
    idCard
    verified
    requestDate
    status
    cover
    paymentPolicy
    shippingPolicy
    refundPolicy
    headline
    brandStory
    prettyUrl
    brandImages {
      path
      caption
    }
    logo
    verifiedDate
    welcomeMessage
  }`;

const stuffQuery = `
  query {
    stuffWithFull(_id: "${stuffId}") {
      name
      category
      description
      location {
        address
        spot
      }
      market
      owner {
        ${ userField }
      }
      path
      price
      quantity
      category
      tags
      createDate
      market
      images {
        path
        size {
          width
          height
        }
      }
      wishes {
        ${ userField }
      }
      view
      likes {
        ${ userField }
      }
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

executeGetQuery(stuffQuery, 3);