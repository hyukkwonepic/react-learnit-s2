import { GraphQLServer, PubSub } from 'graphql-yoga';

// Messages in-memory
let messageId = 0;
let messages = [];

const typeDefs = `
  type Query {
    messages: [Message]!
  }
  type Mutation {
    addMessage(nickname: String!, message: String!): Message!
    deleteMessage(id: String!): Message!
  }
  type Subscription {
    messageAdded: Message
  }
  type Message {
    id: ID!
    nickname: String!
    message: String!
  }
`;

const MESSAGE_ADDED = 'MESSAGE_ADDED';

const resolvers = {
  Query: {
    messages: (root, args, context, info) => {
      // TODO
    }
  },
  Mutation: {
    addMessage: (root, args, context, info) => {
      // TODO
    },
    deleteMessage: (root, args, context, info) => {
      // TODO
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: (root, args, context, info) => {
        // TODO
      }
    }
  }
};

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub }
});

server.start({
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/graphql',
  playground: '/'
},() => {
  console.log('The server started on http://localhost:4000');
});