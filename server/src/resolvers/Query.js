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

async function validContestants(parent, args, context, info) {
  return context.db.query.contestants({where: {out: null}}, info);
}
async function outContestants(parent, args, context, info) {
  return context.db.query.contestants({where: {out: {id_not: null}}}, info);
}

module.exports = {
  tribes,
  contestants,
  episodes,
  points,
  validContestants,
  outContestants,
}
