const http = require('http');
const fs = require('fs');
const url = require('url');
const mongoose = require('mongoose');

const GraphQL = require('./graphql/GraphQL');
const mongoConnect = require('./helpers/MongoConnect');

const hostname = 'localhost';
const port = 3000;

const _parseGraphQlQuery = (query) => {
  const nextQuery = Object.assign({}, query);

  if (query.query) {
    nextQuery.query = decodeURIComponent(nextQuery.query);

    return nextQuery;
  }

  return nextQuery;
}

const _resolveReq = (req) => {
  const nextReq = Object.assign({}, req);
  urlObj = url.parse(decodeURIComponent(nextReq.url), true);

  nextReq.query = urlObj.query;
  nextReq.pathname = urlObj.pathname;
  nextReq.path = urlObj.path;
  nextReq.href = urlObj.href;

  return nextReq;
};


const server = http.createServer((req, res) => {

  const nextReq = _resolveReq(req);

  const headers = nextReq.headers;
  const method = nextReq.method;
  const pathname = nextReq.pathname;

  const graphql = new GraphQL(nextReq, res);
  
  graphql.exec();
});

const listen = () => {
  server.listen(port, hostname);
  console.log(`Server running at http://${hostname}:${port}/`);
};

const connect = () => {
  return mongoConnect.connect().connection;
}

connect()
  .on('error', console.log)
  .on('disconnect', connect)
  .once('open', listen);
