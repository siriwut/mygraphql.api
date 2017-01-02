const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

const { UserQueries, UserMutation } = require('./models/User/UserQL');
const { StuffQueries } = require('./models/Stuff/StuffQL');
const { InterestQueries } = require('./models/Interest/InterestQL');
const { RoleQueries } = require('./models/Role/RoleQL');
const { CartQueries } = require('./models/Cart/CartQL');
const { OrderQueries } = require('./models/Order/OrderQL');
const { OrderTransactionQueries } = require('./models/OrderTransaction/OrderTransactionQL');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: UserQueries.user,
    stuff: StuffQueries.stuff,
    stuffWithFull: StuffQueries.stuffWithFull,
    interest: InterestQueries.interest,
    role: RoleQueries.role,
    carts: CartQueries.carts,
    order: OrderQueries.orders,
    orderTransaction: OrderTransactionQueries.orderTransaction,
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: UserMutation.createUser
  })
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
