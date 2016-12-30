const {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLInputObjectType
} = require('graphql');

const CartSeller = new GraphQLObjectType({
  name: 'CartSeller',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    logo: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  })
});

const CartStuff = new GraphQLObjectType({
  name: 'CartStuff',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    path: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    market: {
      type: GraphQLString
    }    
  })
});

const Cart = new GraphQLObjectType({
  name: 'Cart',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    user: {
      type: GraphQLString
    },
    seller: {
      type: CartSeller
    },
    stuff: {
      type: CartStuff
    },
    label: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    },
    quantity: {
      type: GraphQLInt
    },
    createdDate: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    },
    updatedDate: {
      type: GraphQLString
    }         
  })
});


module.exports = {
  Cart
};



// const { Registry } = require('graphql-helpers');

// const registry = new Registry();

// registry.createType(`
//   type Cart {
//     _id: String
//     user: String
//     seller: CartSeller
//     stuff: CartStuff
//     label: String
//     price: Float
//     quantity: Int
//     createdDate: String
//     status: String
//     updatedDate: String
//   }`
// );

// registry.createType(`
//   type CartSeller {
//     _id: String
//     logo: String
//     name: String
//   }`
// );

// registry.createType(`
//   type CartStuff {
//     _id: String
//     path: String
//     name: String
//     market: String
//   }
// `);

// module.exports = registry.getType('Cart');
