const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
  number: Number,
  airDate: String,
  episodeMessage: String,
  title: String,
  outContestantIds: [String],
});
//
// const pointsSchema = new Schema({
//   contestantID: ID,
//   episodeID: ID,
//   teamReward: Int,
//   teamImmunity: Int,
//   individualReward: Int,
//   individualImmunity: Int,
//   correctVote: Int,
//   recievedVote: Int,
//   out: Int,
//   recievedClue: Int,
//   foundIdol: Int,
//   foundAdvantage: Int,
//   heldIdol: Int,
//   heldAdvantage: Int,
//   quoted: Int,
//   chosenForReward: Int,
//   juryVotes: Int,
//   special: Int,
//   total: Int
// })
//
// const movesSchema = new Schema({
//   episodeID: ID,
//   userID: ID,
//   email: String,
//   username: String,
//   contestantRankByID:[ID]
// })
//
// const tribesSchema = new Schema({
//   color: String,
//   name: String,
//   contestantsByID: [ID],
// })

module.exports = mongoose.model('Episode', episodeSchema);
// module.exports = mongoose.model('Points', pointsSchema);
// module.exports = mongoose.model('Moves', movesSchema);
// module.exports = mongoose.model('Tribes', tribesSchema);
