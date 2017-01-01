const { GraphQLID, GraphQLString } = require('graphql');
const { Stuff, StuffWithFull } = require('./StuffSchema');
const StuffService = require('../../../services/StuffService');

module.exports = {
  stuff: {
    type: Stuff,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: StuffService.findById
  },
  stuffWithFull: {
    type: StuffWithFull,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: StuffService.findFullById
  }
};
