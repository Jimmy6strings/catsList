var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mlab = require('./mlabUsernamePassword.js');

//create variable to use express and to export
var app = express();
//using body parser to parse any
app.use(bodyParser.json());
//encode url requests with certain characters
app.use(bodyParser.urlencoded({extended: true}));
//logs requests onto command line
app.use(morgan('dev'));

//mongoose.connect('mongodb://localhost/users');
mongoose.connect('mongodb://' + mlab.username +
  mlab.password + '@ds053216.mlab.com:53216/users')
//get all the routes from requests
require('./config/routes.js')(app, express);
//set the port to whatever is in the evironment variable or 5000
var port = process.env.PORT || 5000;
//server listens for local host port
app.listen(port, function() {
  console.log("listening on port", port)
});
//export app and its dependencies
module.exports = app;