const { executeQuery } = require('../client');

const userId = '4f88f907213200ba6b000001';

const graphQlQuery = `
  query {
    user(_id: "${userId}") {
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
      }
      payments {
        omise {
          cards {
            lastDigits
            cardId
          }
          customerId
          defaultCard
        }
      }
    }
  }
`;

executeQuery(graphQlQuery);