'use strict';

const express = require('express');
const router = express.Router();

router.get('/api/characters', (req, res, next) => {
  try {
    res.status(200).send('characters');
  } catch(e) {
    res.status(404).send('Not found');
  }
});

module.exports = router;