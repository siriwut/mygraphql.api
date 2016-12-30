const { GraphQLID, GraphQLString } = require('graphql');
const { Stuff } = require('./StuffSchema');
const StuffDB = require('../../../models/Stuff');

module.exports = {
  stuff: {
    type: Stuff,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: StuffDB.findByID
  }
};
