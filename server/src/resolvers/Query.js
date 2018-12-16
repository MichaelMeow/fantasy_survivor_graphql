async function tribes(parent, args, context, info) {

  return context.db.query.tribes({}, info)
}
async function contestants(parent, args, context, info) {

  return context.db.query.contestants({}, info)
}

module.exports = {
  tribes,
  contestants,
}
