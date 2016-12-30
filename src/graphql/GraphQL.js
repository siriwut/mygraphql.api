const { graphql } = require('graphql');
const util = require('util');
//const movieSchema = require('./schemas/MovieSchema');
const schema = require('./Schema');
//const root = require('./root');

class GraphQL { 
  constructor(req, res) {
    this.req = req;
    this.res = res;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
  }

  exec() {
    const query = this.req.graphql.query || '';
    const variables = this.req.graphql.variables || {};
    const operationName = this.req.graphql.operationName || '';

    graphql(
      schema,
      query,
      null,
      null,
      variables,
      operationName
    ).then((data) => {
      this.res.write(JSON.stringify(data));
      this.res.end();
    });
  }
}

module.exports = GraphQL;