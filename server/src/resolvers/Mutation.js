async function signup(parent, args, context, info) {
  return context.db.mutation.createUser({
    data: {
      name: args.name,
      email: args.email
    },
  }, info)
}

async function addContestant(parent, args, context, info) {
  return context.db.mutation.createContestant({
    data: {
      fullName: `${args.firstName} ${args.lastName}`,
      firstName: args.firstName,
      lastName: args.lastName,
      photoURL: args.photoURL,
      originalTribe: {connect: {id: args.originalTribe}},
      currentTribe: {connect: {id: args.currentTribe}},
    },
  }, info)
}

async function addEpisode(parent, args, context, info) {
  return context.db.mutation.createEpisode({
    data: {
      number: args.number,
      title: args.title,
      out1: {connect: {id: args.out1}},
      out2: {connect: {id: args.out2}},
      out3: {connect: {id: args.out3}},
      episodeMessage: args.episodeMessage,
      airDate: args.airDate,
    },
  }, info)
}


async function addTribe(parent, args, context, info) {
  return context.db.mutation.createTribe({
    data: {
      name: args.name,
      color: args.color
    },
  }, info)
}

module.exports = {
  signup,
  addContestant,
  addTribe,
  addEpisode
}
