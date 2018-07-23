const exphbs = require('express-handlebars');
const path = require('path');

module.exports = function(app, express) {
  app.use(express.static(path.join(__dirname, '/public')));
  app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');
};
