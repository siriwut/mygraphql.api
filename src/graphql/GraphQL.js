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
    graphql(schema, this.req.query.query).then((data) => {
      this.res.write(JSON.stringify(data));
      this.res.end();
    });
  }
}

module.exports = GraphQL;