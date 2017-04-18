var mongoose = require('mongoose');
var userData = require('../../data.json');
var assert = require('assert');


var userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
});

var User = mongoose.model('User', userSchema);


/*************************ATTENTION!!!!!!!!!!!!!!!!!!!*********************/
/******************ONLY RUN THESE FUNCTIONS IF YOU KNOW HOW TO SEED DATA****/
// User.collection.insertMany(userData, function(err,r) {
//     assert.equal(null, err);
//     assert.equal(4, r.insertedCount);
//     console.log("here are the users!")
//   });

// User.collection.remove({}, function(err) {
//         console.log('users removed')
//         });

module.exports = User;