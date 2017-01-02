const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = require('graphql');

const StuffLocationType = new GraphQLObjectType({
  name: 'StuffLocation',
  fields: () => ({
    address: { 
      type: GraphQLString
    },
    spot: {
      type: GraphQLString
    }
  })
});

const StuffImageSizeType = new GraphQLObjectType({
  name: 'StuffImageSize',
  fields: () => ({
    width: {
      type: GraphQLInt
    },
    height: {
      type: GraphQLInt
    }
  })
});

const StuffImageType = new GraphQLObjectType({
  name: 'StuffImage',
  fields: () => ({
    path: { 
      type: GraphQLString
    },
    size: {
      type: StuffImageSizeType
    }
  })
});

const StuffVariationType = new GraphQLObjectType({
  name: 'StuffVariation',
  fields: () => ({
    label: {
      type: GraphQLString
    },
    price: { 
      type: GraphQLInt
    },
    quantity: {
      type: GraphQLInt
    }
  })
});


module.exports = {
  StuffLocationType,
  StuffImageSizeType,
  StuffImageType,
  StuffVariationType
};