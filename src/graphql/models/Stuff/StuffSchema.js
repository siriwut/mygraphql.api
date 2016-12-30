const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLInt
} = require('graphql');

const StuffLocation = new GraphQLObjectType({
  name: 'StuffLocation',
  fields: () => ({
    address: { 
      type: GraphQLString
    },
    spot: {
      type: GraphQLInt 
    }
  })
});

const StuffImageSize = new GraphQLObjectType({
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

const StuffImage = new GraphQLObjectType({
  name: 'StuffImage',
  fields: () => ({
    path: { 
      type: GraphQLString
    },
    size: {
      type: StuffImageSize
    }
  })
});

const StuffVariation = new GraphQLObjectType({
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

const Stuff = new GraphQLObjectType({
  name: 'Stuff',
  fields: () => ({
    name: { 
      type: GraphQLString 
    },
    category: { 
      type: GraphQLString 
    },
    description: { 
      type: GraphQLString 
    },
    location: { 
      type: StuffLocation 
    },
    market: { 
      type: GraphQLString 
    },
    owner: { 
      type: GraphQLString 
    },
    path: { 
      type: GraphQLString 
    },
    price: { 
      type: GraphQLInt 
    },
    quantity: { 
      type: GraphQLInt 
    },
    category: { 
      type: GraphQLString 
    },
    tags: { 
      type: new GraphQLList(GraphQLString) 
    },
    owner: { 
      type: GraphQLString 
    },
    createDate: { 
      type: GraphQLString 
    },
    market: { 
      type: GraphQLString 
    },
    images: { 
      type: new GraphQLList(StuffImage) 
    },
    wishes: { 
      type: new GraphQLList(GraphQLString)
    },
    view: { 
      type: GraphQLInt 
    },
    likes: { 
      type: new GraphQLList(GraphQLString) 
    },
    unlikes: { 
      type: new GraphQLList(GraphQLString) 
    },
    countPopular: { 
      type: GraphQLInt 
    },
    repostDate: { 
      type: GraphQLString 
    },
    categories: { 
      type: new GraphQLList(GraphQLString) 
    },
    markets: { 
      type: new GraphQLList(GraphQLString) 
    },
    editorPickDate: { 
      type: GraphQLString 
    },
    deleted: { 
      type: GraphQLBoolean 
    },
    variations: { 
      type: new GraphQLList(StuffVariation) 
    },
    sold: { 
      type: GraphQLBoolean
    },
    soldDate: {
      type: GraphQLString 
    },
    checkOwner: { 
      type: GraphQLString 
    },
    updatedDate: { 
      type: GraphQLString 
    } 
  })
});

module.exports = { 
  Stuff
};


// const { Registry } = require('graphql-helpers');

// const registry = new Registry();

// registry.createType(`
//   type Stuff {
//     name: String
//     category: String
//     description: String
//     location: Location
//     market: String
//     owner: String
//     path: String
//     price: Int
//     quantity: Int
//     category: String
//     tags: [String]
//     owner: String
//     createDate: String
//     market: String
//     images: [StuffImage]
//     wishes: [String]
//     view: Int
//     likes: [String]
//     unlikes: [String]
//     countPopular: Int
//     repostDate: String
//     categories: [String]
//     markets: [String]
//     editorPickDate: String
//     deleted: Boolean
//     variations: [Variation]
//     sold: Boolean
//     soldDate: String
//     checkOwner: String
//     updatedDate: String
//   }`
// );

// registry.createType(`
//   type Location { 
//     address: String
//     spot: Int
//   }
// `);
  
// registry.createType(`
//   type StuffImage { 
//     path: String
//     size: Size
//   }
// `);

// registry.createType(`
//   type Size {
//     width: Int
//     height: Int
//   }
// `);

// registry.createType(`
//   type Variation {
//     label: String
//     price: Int
//     quantity: Int
//   }
// `);

// module.exports = registry.getType('Stuff');
