// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");


const typeDefs = gql`
  type Query {
    hello: String,
    bensquery: String,
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    },
    bensquery: (root, args, context) => {
      return "Hello, Ben!";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();
