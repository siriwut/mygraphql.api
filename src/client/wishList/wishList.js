const { executeGetQuery } = require('../client');

const userId = '4f88f907213200ba6b000001';

const wishListQuery = `
  query getWishList($userId: String) {
    wishList(userId: $userId, page: 0, limit: 50) {
        stuff {
          _id
          path
          description
          price
          categories
          tags
          location {
            address
            spot
          }
          owner {
            _id
            email
            firstname
            lastname
            avatar
            detail
            username
            shop {
              name
              guarantee
              prettyUrl
              logo
            }
            type
          }
          createDate
          createdDate
          repostDate
          images {
            path
            size {
              width
              height
            }
          }
          markets
          market
          variations {
            label
            quantity
            price
          }
          quantity
          view
          likes
          wishes
          likeCount
          likeStatus
          wishCount
          wishStatus
          buyClick
          sumQuantity
          timeDiff
          name
        }
        createDate
        timeDiff
      }
    }
`;

executeGetQuery({
  query: wishListQuery,
  variables: {
    userId
  }
}, 5);
