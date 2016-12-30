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

const OrderMerchant = new GraphQLObjectType({
  name: 'OrderMerchant',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    tel: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    }   
  })
});

const OrderStuff = new GraphQLObjectType({
  name: 'OrderStuff',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    path: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    sku: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    merchant: {
      type: OrderMerchant
    }   
  })
});

const OrderShipping = new GraphQLObjectType({
  name: 'OrderShipping',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    tel: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    postalCode: {
      type: GraphQLString
    },
    tracking: {
      type: GraphQLString
    }
  })
});

const OrderUser = new GraphQLObjectType({
  name: 'OrderUser',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    avatar: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    firstname: {
      type: GraphQLString
    },
    lastname: {
      type: GraphQLString
    }
  })
});

const OrderPayment = new GraphQLObjectType({
  name: 'OrderPayment',
  fields: () => ({
    description: {
      type: GraphQLString
    },
    amount: {
      type: GraphQLInt
    },
    currency: {
      type: GraphQLString
    },
    chargeId: {
      type: GraphQLString
    },
    cardId: {
      type: GraphQLString
    }  
  })
});

const Order = new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    stuff: {
      type: OrderStuff
    },
    id: {
      type: GraphQLString
    },
    shipping: {
      type: OrderShipping
    },
    paymentStatus: {
      type: GraphQLString
    },
    orderStatus: {
      type: GraphQLString
    },
    shopStatus: {
      type: GraphQLString
    },
    user: {
      type: OrderUser
    },
    payment: {
      type: OrderPayment
    },
    createdDate: {
      type: GraphQLString
    },
    paymentDate: {
      type: GraphQLString
    }      
  })
});


module.exports = {
  Order
};


// const { Registry } = require('graphql-helpers');

// const registry = new Registry();

// registry.createType(`
//   type Order {
//     _id: String
//     stuff: OrderStuff
//     id: String
//     shipping: OrderShipping
//     paymentStatus: String
//     orderStatus: String
//     shopStatus: String
//     user: OrderUser
//     payment: OrderPayment
//     createdDate: String
//     paymentDate: String  
//   }`
// );

// registry.createType(`
//   type OrderStuff {
//     _id: String
//     path: String
//     price: Int
//     name: String
//     sku: String
//     description: String
//     merchant: OrderMerchant
//   }
// `);

// registry.createType(`
//   type OrderMerchant {
//     name: String
//     tel: String
//     email: String
//   }
// `);

// registry.createType(`
//   type OrderShipping {
//     name: String
//     address: String
//     email: String
//     tel: String
//     city: String
//     postalCode: String
//     tracking: String
//   }
// `);

// registry.createType(`
//   type OrderUser {
//     _id: String
//     avatar: String
//     email: String
//     firstname: String
//     lastname: String
//   }
// `);

// registry.createType(`
//   type OrderPayment {
//     description: String
//     amount: Int
//     currency: String
//     chargeId: String
//     cardId: String
//   }
// `);

// module.exports = registry.getType('Order');
