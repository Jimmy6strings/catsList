/**
 *  This file should be a standalone script that seeds your database,
 *  making testing interactions with your database much easier.
 *
 *  You should be able to run this file from Terminal with:
 *
 *    node ./seed.js
 *
 *  And populate your database with all the data from `data.json`
 */

var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
 app.use(express.static(__dirname + '/../client'))
 console.log('this is directory name' + __dirname);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/cats');

 app.get('/borrow-a-cat', function (req, res) {
   res.sendFile(path.join(__dirname, '/../client/index.html'));
 })

var port = process.env.PORT || 27017;
app.listen(port, function () {
  console.log('cats are listening on port 27017!')
})

module.exports = app;
// Step 1: Drop old data
// TODO

// Step 2: Add data from `data.json`
// TODO

