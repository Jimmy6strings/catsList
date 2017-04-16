var Cats = require('./catsModel.js');
var db = require('../server.js');
var Q = require('q');
var mongoose = require('mongoose');

var findAllCats = Q.nbind(Cats.find, Cats);
var findCat = Q.nbind(Cats.findOne, Cats);
var createCat = Q.nbind(Cats.create, Cats);

module.exports = {

  getCats: function(req, res, next) {
    console.log(req.body);
    findAllCats({})
    .then(function (cat) {
        res.json(cat);
      })
      .fail(function (error) {
        next(error);
      });
  },

  postCats: function(req, res, next) {
    console.log(req.body);
    var catName = req.body.name;
    var catOwner = req.body.owner;
    var catImage = req.body.image;
    findCat({
      name: catName,
      catOwner: catOwner,
      catImage: catImage
    })
      .then(function (cat) {
        if(cat) {
          next(new Error('cat already exists'));
          console.log('cat already exists')
        } else {
          return createCat({
            name: catName,
            owner: catOwner,
            image: catImage,
            description: req.body.description
          }).then(function(err) {
            if (err) {
              next(new Error('cat didnt make it'))
            } else {
              console.log("you created a cat!")
            }
          })
        }
      })
  }

}