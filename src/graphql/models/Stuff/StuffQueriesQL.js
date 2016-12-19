const { GraphQLID, GraphQLString } = require('graphql');
const StuffType = require('./StuffTypeQL');
const StuffDB = require('../../../models/Stuff');

module.exports = {
  stuff: {
    type: StuffType,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: StuffDB.findByID
  }
};
