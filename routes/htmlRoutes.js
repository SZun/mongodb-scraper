module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index', null);
  });
  app.get('/saved', (req, res) => {
    res.render('saved', null);
  });
};
