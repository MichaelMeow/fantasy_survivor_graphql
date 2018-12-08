const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contestantSchema = new Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  photoURL: String,
  originalTribe: String,
  currentTribeID: String,
});


module.exports = mongoose.model('Contestant', contestantSchema);
