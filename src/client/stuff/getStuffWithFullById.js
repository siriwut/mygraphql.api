const { executeGetQuery } = require('../client');

const stuffId = '50c8072ded6c52a304000001';

const stuffQuery = `
  query getStuffWithFullById($stuffId: String) {
    stuff : stuffWithFull(_id: $stuffId) {
      name
      category
      description
      location {
        address
        spot
      }
      market
      owner {
        ...user
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
        ...user
      }
      view
      likes {
        ...user
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

  fragment user on User {
    _id
    email
    firstname
    lastname
    avatar
    country
    detail
    view
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
    }
  }
`;

executeGetQuery({ 
  query: stuffQuery,
  variables: {
    stuffId
  }
}, 3);