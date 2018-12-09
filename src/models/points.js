const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pointsSchema = new Schema({
  contestantID: String,
  episodeNumber: Number,
  teamReward: Number,
  teamImmunity: Number,
  individualReward: Number,
  individualImmunity: Number,
  correctVote: Number,
  recievedVote: Number,
  out: Number,
  recievedClue: Number,
  foundIdol: Number,
  foundAdvantage: Number,
  heldIdol: Number,
  heldAdvantage: Number,
  quoted: Number,
  chosenForReward: Number,
  juryVotes: Number,
  special: Number,
  total: Number
})


module.exports = mongoose.model('Points', pointsSchema);
