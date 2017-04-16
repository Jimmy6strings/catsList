var mongoose = require('mongoose');
var catData = require('../../data.json');
var assert = require('assert');


var catSchema = new mongoose.Schema({
  name: String,
  owner: String,
  image: String,
  description: String
});

var Cats = mongoose.model('Cats', catSchema);


/*************************ATTENTION!!!!!!!!!!!!!!!!!!!*********************/
/******************ONLY RUN THESE FUNCTIONS IF YOU KNOW HOW TO SEED DATA****/
// Cats.collection.insertMany(catData, function(err,r) {
//     assert.equal(null, err);
//     assert.equal(8, r.insertedCount);
//     console.log("here are the cats!")
//   });

// Cats.collection.remove({}, function(err) {
//         console.log('cats removed')
//         });

module.exports = Cats;