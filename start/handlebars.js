const exphbs = require('express-handlebars');

module.exports = function(app, express) {
  app.use(express.static('public'));
  app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');
};
