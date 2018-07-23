const articles = require('../routes/articles');
const notes = require('../routes/notes');
const scraper = require('../routes/scraper');

module.exports = app => {
  app.use('/api/scrape', scraper);
  app.use('/api/notes', notes);
  app.use('/api/articles', articles);
};
