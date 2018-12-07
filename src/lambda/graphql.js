// src/lambda/graphql.js
import { ApolloServer, gql } from 'apollo-server-lambda';
import * as mongoose from 'mongoose';
const Contestant = require('../models/contestants');



mongoose.connect('mongodb://mikey:mikey555666@ds027769.mlab.com:27769/fantasy_survivor');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

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
      let newContestant = new Contestant({
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
        photoURL: args.photoURL,
        originalTribe: args.originalTribe
      });
      newContestant.save()
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
