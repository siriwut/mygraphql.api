const http = require('http');
const fs = require('fs');
const url = require('url');
const mongoose = require('mongoose');

const GraphQL = require('./graphql/GraphQL');
const mongoConnect = require('./helpers/MongoConnect');

const hostname = 'localhost';
const port = 3000;

const _resolveReq = (req) => {
  const nextReq = Object.assign({}, req);

  urlObj = url.parse(decodeURIComponent(nextReq.url), true);

  nextReq.query = urlObj.query;
  nextReq.pathname = urlObj.pathname;
  nextReq.path = urlObj.path;
  nextReq.href = urlObj.href;

  return nextReq;
};

const _resolveGraphQlQuery = (req) => {
  const nextReq = _resolveReq(req);
  const graphqlQuery = JSON.parse(nextReq.query.query);

  nextReq.graphql = { 
    query: graphqlQuery.query,
    operationName: graphqlQuery.operationName || '',
    variables: graphqlQuery.variables || {}
  };

  return nextReq;
}

const _resolveGraphQlMutation = (req, chunk) => {
  const nextReq = Object.assign({}, req);
  const data = JSON.parse(chunk.toString());

  nextReq.graphql = { 
    query: data.query,
    operationName: data.operationName || '',
    variables: data.variables || {}
  };

  return nextReq;
}


const server = http.createServer((req, res) => {
  const headers = req.headers;
  const method = req.method;
  const pathname = req.pathname;

  if (method === 'GET') {
    const nextReq = _resolveGraphQlQuery(req);
    const graphql = new GraphQL(nextReq, res);
    
    graphql.exec();
  }

  if (method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      const nextReq = _resolveGraphQlMutation(req, Buffer.concat(body));
      const graphql = new GraphQL(nextReq, res);

      graphql.exec();
    });
  }
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
