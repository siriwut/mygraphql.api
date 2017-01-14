const { executeGetQuery } = require('../client');

const userId = '4f88f907213200ba6b000001';

const interestQuery = `
  query getInterestByUserId($userId: String) {
    interest(userId: $userId) {
      countFollowers
      country
      deletedWishes(page: 0, limit: 10) {
        stuff {
          ...stuff
        }
        createDate
        deletedDate
      }
      followers(page: 0, limit: 10) {
        ...user
      }
      following(page: 0, limit: 10) {
        ...user
      }
      unfollow(page: 0, limit: 10) {
        ...user
      }
      user {
        ...user
      }
      wishes(page: 0, limit: 10) {
        stuff {
          ...stuff
        }
        createDate
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
  query: interestQuery,
  variables: {
    userId
  }
}, 4);