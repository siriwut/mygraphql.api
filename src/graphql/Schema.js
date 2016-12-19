const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

const { UserQueries, UserType } = require('./models/User/UserQL');
const { StuffQueries, StuffType } = require('./models/Stuff/StuffQL');
const { RoleQueries, RoleType } = require('./models/Role/RoleQL');
const { CartQueries, CartType } = require('./models/Cart/CartQL');
const { OrderQueries, OrderType } = require('./models/Order/OrderQL');
const { OrderTransactionQueries, OrderTransactionType } = require('./models/OrderTransaction/OrderTransactionQL');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: UserQueries.user,
    stuff: StuffQueries.stuff,
    role: RoleQueries.role,
    carts: CartQueries.carts,
    orders: OrderQueries.orders,
    orderTransactions: OrderTransactionQueries.orderTransactions
  })
});

module.exports = new GraphQLSchema({
  query: Query
});
