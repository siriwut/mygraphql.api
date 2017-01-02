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

const {
  StuffLocationType,
  StuffImageSizeType,
  StuffImageType,
  StuffVariationType
} = require('./Types');

const { User } = require('../../User/UserSchema');

const UserType = User;

const StuffWithFullType = new GraphQLObjectType({
  name: 'StuffWithFull',
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
      type: StuffLocationType
    },
    market: { 
      type: GraphQLString 
    },
    owner: { 
      type: UserType 
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
      type: new GraphQLList(UserType)
    },
    view: { 
      type: GraphQLInt 
    },
    likes: { 
      type: new GraphQLList(UserType) 
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
    checkOwner: { 
      type: GraphQLString 
    },
    updatedDate: { 
      type: GraphQLString 
    } 
  })
});

module.exports = StuffWithFullType;