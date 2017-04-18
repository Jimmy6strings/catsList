var usersController = require('../users/usersController.js')


module.exports = function(app, express) {
  //get all the users
  app.get('/api/users/getusers', usersController.getUsers);
  //create a new user
  app.post('/api/users/postusers', usersController.postUsers);
}