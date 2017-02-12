const util = require('util');
const request = require('request');
const { timesSeries } = require('async');

/** Set Loop Times Here **/
const loopTimes = 100;




/** Code **/
const userId = '4f88f907213200ba6b000001';

function fetchData(cb) {
  request.get('http://test.shopspotapp.com:8080/user/wish/list', {
    qs: {
      page: 0,
      limit: 50,
      id: userId
    },
    time: true
  }, (err, res, body) => {
    cb(err, res, body);
  });
}

function time(n, next) {
  fetchData((err, res, body) => {
    console.log(`[SS - Mongo Native] ${n + 1}: ${res.elapsedTime} ms`);
    if(err) {
      next(err);
    } else {
       next(err, res.elapsedTime);
    }
    //next(err, res);
  });
}

function timeDone (err, elapsedTimes) {
  if (err) {
    console.log(err);
  } else {
    //console.log(elapsedTimes)
    const m = elapsedTimes.length;
    const sum = elapsedTimes.reduce((a, b) => a + b, 0);
    const average = sum / m;

    console.log('\n');
    console.log('REST : Mongo Native');
    console.log('Test API : Wish List');
    console.log('\n');
    console.log(`min: ${Math.min(...elapsedTimes)} ms / ${loopTimes} times`);
    console.log(`max: ${Math.max(...elapsedTimes)} ms / ${loopTimes} times`);
    console.log(`average: ${average} ms / ${loopTimes} times`);
    console.log('\n');
  }
}

function run(n) {
  console.log('--- Shopspot : Mongo Native ---');
  timesSeries(n, time, timeDone);
  // fetchData((err, res, body) => {
  //   console.log(err);
  // });
}

run(loopTimes);
