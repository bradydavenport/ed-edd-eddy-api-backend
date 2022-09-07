'use strict';

require('dotenv').config();
const express = require('express');
const getCharacters = require('./routes/characters')
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();
const PORT = process.env.PORT || 3002;
app.use(express.json);

app.get('/', (req, res) => {
  res.send('Thanks for visiting the \"Ed, Edd, n Eddy\" API! The site is under construction')
});
app.get('/api/characters', getCharacters);
app.get('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
};
