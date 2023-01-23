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

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
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
