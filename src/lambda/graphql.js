// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");


const typeDefs = gql`
  type Query {
    contestants: [Contestant]
  }
  type Contestant {
    id: ID!
    firstName: String!
    lastName: String!
    photoURL: String!
    originalTribe: String!
  }
  type Mutation {
    createContestant(id: ID!, firstName: String!, lastName: String!, photoURL: String!, originalTribe: String!): Contestant!
  }
`;

//start with mock db array
let contestants = [{
  id: 1,
  firstName: "Alec",
  lastName: "Merlino",
  photoURL: "example.com",
  originalTribe: "Goliath"
},
{
  id: 2,
  firstName: "Mike",
  lastName: "White",
  photoURL: "example.com",
  originalTribe: "David"
}];

const resolvers = {
  Query: {
    contestants: () => contestants,
  },
  Mutation: {
    createContestant: (root, args) => {
      const newContestant = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
        photoURL: args.photoURL,
        originalTribe: args.originalTribe
      }
      contestants.push(newContestant)
      return newContestant
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();
