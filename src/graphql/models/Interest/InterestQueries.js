const {
  GraphQLID,
  GraphQLString,
  GraphQLList 
} = require('graphql');
const { Interest } = require('./InterestSchema');
const InterestService = require('../../../services/InterestService');

module.exports = {
  interest: {
    type: Interest,
    args: {
      userId: {
        type: GraphQLString
      }
    },
    resolve: InterestService.findByUserId
  }
};
