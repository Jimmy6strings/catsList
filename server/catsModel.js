var mongoose = require('mongoose');
var origCatSchema = require('/Users/jamesmitchell/Desktop/hrr22/hrr22-technical-assessment/catslist/client/data.json');
var catSchema = new mongoose.Schema({
  name: String,
  owner: String,
  image: String,
  description: String
});

module.exports.origCatData = mongoose.model('Cat', origCatSchema);
module.exports.catSchema = mongoose.model('newCat', catSchema);