const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLObjectType,
    GraphQLUnionType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLInt
} = require('graphql');

const UserService = require('../../../../services/UserService');
const { User } = require('../../User/UserSchema');
const UserRepository = require('../../../../models/User');

const {
  StuffLocationType,
  StuffImageSizeType,
  StuffImageType,
  StuffVariationType
} = require('./Types');

const StuffType = new GraphQLObjectType({
  name: 'Stuff',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
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
      type: StuffLocationType
    },
    market: { 
      type: GraphQLString 
    },
    ownerId: {
      type: GraphQLString,
      resolve: stuff => stuff.owner
    },
    owner: { 
      type: User,
      args: {
        _id: {
          type: GraphQLString
        }
      },
      resolve: stuff => UserService.getById(null, { _id: stuff.owner})
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
    createDate: { 
      type: GraphQLString 
    },
    market: { 
      type: GraphQLString 
    },
    images: { 
      type: new GraphQLList(StuffImageType) 
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
      type: new GraphQLList(StuffVariationType) 
    },
    sold: { 
      type: GraphQLBoolean
    },
    soldDate: {
      type: GraphQLString 
    },
    updatedDate: { 
      type: GraphQLString 
    } 
  })
});

module.exports = StuffType;


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
