// src/lambda/graphql.js
import { ApolloServer, gql } from 'apollo-server-lambda';
import * as mongoose from 'mongoose';
const Contestant = require('../models/contestant');
const Episode = require('../models/episode');


mongoose.connect('mongodb://mikey:mikey555666@ds027769.mlab.com:27769/fantasy_survivor');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

const typeDefs = gql`
  type Query {
    contestants: [Contestant]
    episodes: [Episode]
    contestant(id:ID!): Contestant
  }
  type Contestant {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    photoURL: String!
    originalTribe: String!
  }
  type Episode {
    id: ID!
    number: Int!
    airDate: String!
    episodeMessage: String
    title: String!
    outContestantIds: [ID!]!
  }
  type Mutation {
    addContestant(
      firstName: String!,
      lastName: String!,
      photoURL: String!,
      originalTribe: String!): Contestant!
    addEpisode(
      number: Int!,
      airDate: String!,
      episodeMessage: String,
      title: String!,
      out1: String!,
      out2: String,
      out3: String,): Episode!
  }
`;

const resolvers = {
  Query: {
    contestants: () => {
      return Contestant.find({});
    },
    episodes: () => {
      return Episode.find({});
    },
    contestant: (root, args ) => {
      return Contestant.findById(args.id);
    }
  },
  Mutation: {
    addContestant: (root, args) => {
      let newContestant = new Contestant({
        firstName: args.firstName,
        lastName: args.lastName,
        fullName: args.firstName + ' ' + args.lastName,
        photoURL: args.photoURL,
        originalTribe: args.originalTribe
      });
      return newContestant.save();
    },
    addEpisode: (root, args) => {
      let newEpisode = new Episode({
        number: args.number,
        airDate: args.airDate,
        episodeMessage: args.episodeMessage,
        title: args.title,
        outContestantIds: [args.out1, args.out2, args.out3]
      })
      return newEpisode.save();
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();
