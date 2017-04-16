var db = require('./catsModel.js');
var request = require('request');
var bluebird = require('bluebird');
var http = require('http');

exports.listCats = function (req, res) {
 db.origCatData.find({}, function(err, results) {
  if (results) {
    return res.send(results)
  } else {
    return console.log(err);
  }
 })
};

exports.addCat = function (req, res) {
  db.catSchema.create({
    name: {type: String},
    owner: {type: mongoose.SchemaTypes.Email},
    image: String,
    description: String
  }).then(function (err) {
    if (err) {
      return console.log(err);
    } else {
      return res.send(202);
    }
  })
}