var Users = require('./usersModel.js');
var db = require('../server.js');
var Q = require('q');
var mongoose = require('mongoose');

var findAllUsers = Q.nbind(Users.find, Users);
var findUser = Q.nbind(Users.findOne, Users);
var createUser = Q.nbind(Users.create, Users);

module.exports = {

  getUsers: function(req, res, next) {
    console.log(req.body);
    findAllUsers({})
    .then(function (user) {
        res.json(user);
      })
      .fail(function (error) {
        next(error);
      });
  },

  postUsers: function(req, res, next) {
    console.log(req.body);
    var userName = req.body.name;
    var userAge = req.body.age;
    var userGender = req.body.gender;
    findUser({
      name: userName,
      age: userAge,
      gender: userGender
    })
      .then(function (user) {
        if(user) {
          next(new Error('user already exists'));
          console.log('user already exists')
        } else {
          return createUser({
            name: userName,
            age: userAge,
            gender: userGender
          }).then(function(err) {
            if (err) {
              console.log("you created a user!");
            } else {
              next(new Error('user didnt make it'))
            }
          })
        }
      })
  }

}