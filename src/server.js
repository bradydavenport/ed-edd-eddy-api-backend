'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');
const charactersRoute = require('./routes/characters');
const episodesRoute = require('./routes/episodes');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3003;

app.use(logger);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Thanks for visiting the "Ed, Edd, n Eddy" API! The site is under construction');
});

app.use(charactersRoute);
app.use(episodesRoute);
app.get('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {
  app,
  start,
};
