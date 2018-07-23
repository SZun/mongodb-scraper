const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5280;

require('./start/connection')(mongoose);
require('./start/bodyParser')(app);
require('./start/handlebars')(app, express);
require('./routes/htmlRoutes')(app);
require('./start/routes')(app);

app.listen(PORT, console.log(`App listening on port ${PORT}`));
