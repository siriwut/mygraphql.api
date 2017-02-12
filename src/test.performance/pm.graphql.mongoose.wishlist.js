const util = require('util');
const request = require('request');
const { timesSeries } = require('async');

/** Set Loop Times Here **/
const loopTimes = 100;



/** Code **/
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

const graphQlQuery = {
  query: wishListQuery,
  variables: {
    userId
  }
};

function fetchData(graphQlQuery, cb) {
  request.get('http://localhost:3000/graphql', {
    qs: {
      query: JSON.stringify(graphQlQuery)
    },
    time: true
  }, (err, res, body) => {
    //console.log(`${res.elapsedTime} ms`);
    cb(err, res, body);
  });
}

function time(n, next) {
  fetchData(graphQlQuery, (err, res, body) => {
    if (err) {
      next(err);
    } else {
      console.log(`[GraphQL Mongoose] ${n + 1}: ${res.elapsedTime} ms`);
      //console.log(body);
      next(err, res.elapsedTime);
    }
  });
}

function timeDone (err, elapsedTimes) {
  if (err) {
    console.log(err);
  } else {
    const m = elapsedTimes.length;
    const sum = elapsedTimes.reduce((a, b) => a + b, 0);
    const average = sum / m;

    console.log('\n');
    console.log('GraphQL : Mongoose');
    console.log('Test API : Wish List');
    console.log('\n');
    console.log(`min: ${Math.min(...elapsedTimes)} ms / ${loopTimes} times`);
    console.log(`max: ${Math.max(...elapsedTimes)} ms / ${loopTimes} times`);
    console.log(`average: ${average} ms / ${loopTimes} times`);
    console.log('\n');
  }
}

function run(n) {
  console.log('--- GraphQL : Mongoose ---');
  timesSeries(n, time, timeDone);
}

run(loopTimes);

