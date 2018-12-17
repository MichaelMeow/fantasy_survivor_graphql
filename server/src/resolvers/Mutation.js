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
  let outArray = [];
  if (args.out1){
    let out1 = {
      id: args.out1
    }
    outArray.push(out1)
  }
  if (args.out2){
    let out2 = {
      id: args.out2
    }
    outArray.push(out2)
  }
  if (args.out3){
    let out3 = {
      id: args.out3
    }
    outArray.push(out3)
  }
  return context.db.mutation.createEpisode({
    data: {
      number: args.number,
      title: args.title,
      out: {connect: outArray},
      episodeMessage: args.episodeMessage,
      airDate: args.airDate,
    },
  }, info)
}
async function addPoints(parent, args, context, info) {
  const teamReward = args.teamReward ? 2 : 0;
  const teamImmunity = args.teamImmunity ? 4 : 0;
  const individualReward = args.individualReward ? 3 : 0;
  const individualImmunity = args.individualImmunity ? 6 : 0;
  const correctVote = args.correctVote ? 2 : 0;
  const recievedVote = args.recievedVote ? -1 : 0;
  const out = args.out ? -2 : 0;
  const recievedClue = args.recievedClue ? 1 : 0;
  const foundIdol = args.foundIdol ? 1 : 0;
  const foundAdvantage = args.foundAdvantage ? 1 : 0;
  const heldIdol = args.heldIdol;
  const heldAdvantage = args.heldAdvantage ? 1 : 0;
  const quoted = args.quoted ? 1 : 0;
  const chosenForReward = args.chosenForReward ? 1 : 0;
  const juryVotes = args.juryVotes;
  const special = args.special
  const total = teamReward + teamImmunity + individualReward + individualImmunity + correctVote + recievedVote + out + recievedClue + foundIdol + foundAdvantage + heldIdol + heldAdvantage + quoted + chosenForReward + juryVotes + special;

  return context.db.mutation.createPoints({
    data: {
      contestant: {connect: {id: args.contestant}},
      episode: {connect: {id: args.episode}},
      teamReward: teamReward,
      teamImmunity: teamImmunity,
      individualReward: individualReward,
      individualImmunity: individualImmunity,
      correctVote: correctVote,
      recievedVote: recievedVote,
      out: out,
      recievedClue: recievedClue,
      foundIdol: foundIdol,
      foundAdvantage: foundAdvantage,
      heldIdol: heldIdol,
      heldAdvantage: heldAdvantage,
      quoted: quoted,
      chosenForReward: chosenForReward,
      juryVotes: juryVotes,
      special: special,
      total: total
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

async function updateContestant(parent, args, context, info) {
  return context.db.mutation.updateContestant({
    data: {
      currentTribe: {connect: {id: args.tribe}}
    },
    where: {
      id: args.contestant
    }
  }, info)
}

module.exports = {
  signup,
  addContestant,
  addTribe,
  addEpisode,
  addPoints,
  updateContestant,
}
