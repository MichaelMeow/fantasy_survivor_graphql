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
      firstName: args.firstName,
      lastName: args.lastName,
      photoURL: args.photoURL,
      originalTribe: {connect: {id: args.originalTribe}},
      currentTribe: {connect: {id: args.currentTribe}},
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
  addTribe
}
