const { executeGetQuery } = require('../client');

const userId = '4f88f907213200ba6b000001';

const userProfileQuery = `
  query getUserProfile($userId: String) {
    interest(userId: $userId) {
      countFollowers
      country
      deletedWishes(page: 0, limit: 1) {
        stuff {
          ...stuff
        }
        createDate
        deletedDate
      }
      followers(page: 0, limit: 5) {
        ...user
      }
      following(page: 0, limit: 1) {
        ...user
      }
      unfollow(page: 0, limit: 1) {
        ...user
      }
      user {
        ...user
      }
      wishes(page: 0, limit: 1) {
        stuff {
          ...stuff
        }
        createDate
      }
    }

    user(_id: $userId) {
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
  }

  fragment stuff on Stuff {
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
    updatedDate  
  }
`;

executeGetQuery({
  query: userProfileQuery,
  variables: {
    userId
  }
}, 3);