const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/michael-harmon/fantasy_survivor/dev?headers={"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDUwMDM1ODUsIm5iZiI6MTU0NDkxNzE4NX0.v9RESyHK_ARjqxAPGHAnVqmV6Kur1ybste39dh3ViQs"}',
      secret: 'mysecret123',
      debug: true
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
