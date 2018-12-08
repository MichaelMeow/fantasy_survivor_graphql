const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contestantSchema = new Schema({
  firstName: String,
  lastName: String,
  photoURL: String,
  originalTribe: String
})

module.exports = mongoose.model('Contestant', contestantSchema);
