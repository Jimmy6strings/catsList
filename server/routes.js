var handler = require('./request-handler.js');

module.exports = function(app, express) {
  app.get('/api/borrowcats', handler.listCats);
  app.post('api/borrowcats', handler.addCat)
}