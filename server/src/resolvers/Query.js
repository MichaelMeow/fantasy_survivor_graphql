async function tribes(parent, args, context, info) {
  return context.db.query.tribes({}, info)
}
async function contestants(parent, args, context, info) {
  return context.db.query.contestants({}, info)
}
async function episodes(parent, args, context, info) {
  return context.db.query.episodes({orderBy: args.orderBy}, info);
}
async function pointses(parent, args, context, info) {
  return context.db.query.pointses({where: {
    AND:[{
      contestant: {id: args.contestant}
    },{
      episode: {id: args.episode}
    }]}}, info)
}

async function points(parent, args, context, info) {
  return context.db.query.points({where: {id: args}}, info)
}

async function validContestants(parent, args, context, info) {
  const filter = args.filter-1
  return context.db.query.contestants({where: {
    OR:[{
      out: {number_gt: filter}
    },{
      out: null
    }]
  }}, info);
}
async function outContestants(parent, args, context, info) {
  const filter = args.filter
  return context.db.query.contestants({where: {out: {number_lt: filter}}}, info);
}

module.exports = {
  tribes,
  contestants,
  episodes,
  points,
  pointses,
  validContestants,
  outContestants,
}
