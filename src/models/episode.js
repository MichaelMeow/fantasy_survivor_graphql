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
