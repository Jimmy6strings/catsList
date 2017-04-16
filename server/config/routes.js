var catsController = require('../cats/catsController.js')


module.exports = function(app, express) {
  //get all the cats
  app.get('/api/cats/getcats', catsController.getCats);
  //create a new cat
  app.post('/api/cats/postcats', catsController.postCats);

}