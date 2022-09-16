'use strict';

const express = require('express');
const { CharacterModel } = require('../models');
const router = express.Router();

router.get('/api/characters', (req, res, next) => {
  try {
    res.status(200).send('characters');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// need to 
router.get('/api/characters/:id', (req, res, next) => {
  try {
    res.status(200).send('character');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post('/api/characters', async (req, res, next) => {
  const character = req.body;
  try {
    let response = await CharacterModel.create(character);
    console.log('response: ', response);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;