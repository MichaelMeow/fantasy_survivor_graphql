async function tribes(parent, args, context, info) {

  return context.db.query.tribes({}, info)
}
async function contestants(parent, args, context, info) {

  return context.db.query.contestants({}, info)
}
async function episodes(parent, args, context, info) {

  return context.db.query.episodes({}, info)
}
async function points(parent, args, context, info) {

  return context.db.query.points({}, info)
}

module.exports = {
  tribes,
  contestants,
  episodes,
  points,
}
