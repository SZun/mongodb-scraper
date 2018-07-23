const path = require('path');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index', null);
  });
  app.get('/saved', (req, res) => {
    res.render('saved', null);
  });
};
