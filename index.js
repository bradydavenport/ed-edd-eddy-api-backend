'use strict';

require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Thanks for visiting the \"Ed, Edd, n Eddy\" API! The site is under construction')
});

app.get('*', (req, res) => {
  res.send('The thing you are looking for does not exist')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));