const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5280;

require('./start/connection')(mongoose);

app.listen(PORT, console.log(`App listening on port ${PORT}`));
