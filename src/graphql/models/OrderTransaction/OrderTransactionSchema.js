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

const OrderTransactionSeller = new GraphQLObjectType({
  name: 'OrderTransactionSeller',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    tel: {
      type: GraphQLString
    },
    logo: {
      type: GraphQLString
    }     
  })
});

const OrderTransactionStuff = new GraphQLObjectType({
  name: 'OrderTransactionStuff',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    path: {
      type: GraphQLString
    },
    label: {
      type: GraphQLString
    },
    quantity: {
      type: GraphQLInt
    },
    price: { 
      type: GraphQLFloat
    },
    totalPriceEachCart: { 
      type: GraphQLFloat
    },
    ownerId: {
      type: GraphQLString
    }   
  })
});

const OrderTransactionCustomerShipping = new GraphQLObjectType({
  name: 'OrderTransactionCustomerShipping',
  fields: () => ({
    address: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    postalCode: {
      type: GraphQLString
    },
    tel: {
      type: GraphQLString
    }   
  })
});

const OrderTransactionCustomer = new GraphQLObjectType({
  name: 'OrderTransactionCustomer',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    avatar: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    shipping: { 
      type: OrderTransactionCustomerShipping
    }
  })
});

const OrderTransactionLogistic = new GraphQLObjectType({
  name: 'OrderTransactionLogistic',
  fields: () => ({
    provider: {
      type: GraphQLString
    },
    fee: {
      type: GraphQLFloat
    },
    trackingNumber: {
      type: GraphQLString
    },
    shippingDate: {
      type: GraphQLString
    } 
  })
});

const OrderTransaction = new GraphQLObjectType({
  name: 'OrderTransaction',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    seller: { 
      type: OrderTransactionSeller
    },
    stuffs: {
      type: new GraphQLList(OrderTransactionStuff)
    },
    cartIds: {
      type: new GraphQLList(GraphQLString)
    },
    customer: {
      type: OrderTransactionCustomer
    },
    logistic: {
      type: OrderTransactionLogistic
    },
    netQuantity: {
      type: GraphQLFloat
    },
    netPrice: {
      type: GraphQLInt
    },
    paymentMethod: {
      type: GraphQLString
    },
    orderStatus: {
      type: GraphQLString
    },
    paymentDate: {
      type: GraphQLString
    },
    confirmDate: {
      type: GraphQLString
    },
    createdDate: {
      type: GraphQLString
    },
    updatedDate: {
      type: GraphQLString
    },
    deleted: {
      type: GraphQLBoolean
    },
    remark: {
      type: GraphQLString
    }     
  })
});


module.exports = {
  OrderTransaction
};

// const { Registry } = require('graphql-helpers');

// const registry = new Registry();

// registry.createType(`
//   type OrderTransaction {
//     _id: String
//     id: String
//     seller: OrderTransactionSeller
//     stuffs: [OrderTransactionStuff]
//     cartIds: [String]
//     customer: OrderTransactionCustomer
//     logistic: OrderTransactionLogistic
//     netQuantity: Float
//     netPrice: Int
//     paymentMethod: String
//     orderStatus: String
//     paymentDate: String
//     confirmDate: String
//     createdDate: String
//     updatedDate: String
//     deleted: Boolean
//     remark: String  
//   }`
// );

// registry.createType(`
//   type OrderTransactionSeller {
//     _id: String
//     name: String
//     email: String
//     tel: String
//     logo: String
//   }
// `);

// registry.createType(`
//   type OrderTransactionStuff {
//     _id: String
//     name: String
//     path: String
//     label: String
//     quantity: Int
//     price: Float
//     totalPriceEachCart: Float
//     ownerId: String
//   }
// `);

// registry.createType(`
//   type OrderTransactionCustomer {
//     _id: String
//     avatar: String
//     name: String
//     shipping: OrderTransactionShipping
//   } 
// `);

// registry.createType(`
//   type OrderTransactionShipping {
//     address: String
//     city: String
//     email: String
//     name: String
//     postalCode: String
//     tel: String
//   }
// `);

// registry.createType(`
//   type OrderTransactionLogistic {
//     provider: String
//     fee: Float
//     trackingNumber: String
//     shippingDate: String
//   }
// `);

// module.exports = registry.getType('OrderTransaction');
