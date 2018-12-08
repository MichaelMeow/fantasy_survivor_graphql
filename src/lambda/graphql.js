// src/lambda/graphql.js
import { ApolloServer, gql } from 'apollo-server-lambda';
import * as mongoose from 'mongoose';
const Contestant = require('../models/contestant');



mongoose.connect('mongodb://mikey:mikey555666@ds027769.mlab.com:27769/fantasy_survivor');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

const typeDefs = gql`
  type Query {
    contestants: [Contestant]
    contestant(id:ID!): Contestant
  }
  type Contestant {
    id: ID!
    firstName: String!
    lastName: String!
    photoURL: String!
    originalTribe: String!
  }
  type Mutation {
    createContestant(firstName: String!, lastName: String!, photoURL: String!, originalTribe: String!): Contestant!
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
    contestants: () => {
      return Contestant.find({});
    },
    contestant: (root, args ) => {
      return Contestant.findById(args.id);
    }
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
      return newContestant.save()
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
