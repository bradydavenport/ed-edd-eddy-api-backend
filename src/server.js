'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');
const charactersRoute = require('./routes/characters');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3003;
const { Pool, Client } = require('pg');
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({
  connectionString,
});
const bodyParser = require('body-parser');

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

pool.connect((err, client, release) => {
  if (err) {
    return console.error(
      'Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error(
        'Error executing query', err.stack);
    }
    console.log('Connected to Database');
  });
});


app.get('/', (req, res) => {
  res.status(200).send('Thanks for visiting the "Ed, Edd, n Eddy" API! The site is under construction');
});

app.get('/testdata', (req, res, next) => {
  console.log('TEST DATA :');
  pool.query('Select * from test')
    .then(testData => {
      console.log(testData);
      res.send(testData.rows);
    });
});

app.get('/characters', (req, res, next) => {
  pool.query('SELECT * FROM characters')
    .then(charData => {
      console.log(charData);
      res.send(charData.rows);
    });
});

app.use(charactersRoute);
app.get('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {
  app,
  start,
};
