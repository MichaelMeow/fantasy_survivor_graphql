async function signup(parent, args, context, info) {
  return context.db.mutation.createUser({
    data: {
      name: args.name,
      email: args.email
    },
  }, info)
}

module.exports = {
  signup,
}
