'use strict';

const express = require('express');
const { characterInterface } = require('../models');
const router = express.Router();

router.get('/api/characters', async (req, res, next) => {
  try {
    let response = await characterInterface.readAll();
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get('/api/characters/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let selectedCharacter = await characterInterface.readOne(id);
    res.status(200).send(selectedCharacter);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post('/api/characters', async (req, res, next) => {
  const character = req.body;
  try {
    let response = await characterInterface.create(character);
    console.log('response: ', response);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete('/api/characters/:id', async (req, res, next) => {
  const { id } = req.params;
  try{
    let selectedCharacter = await characterInterface.delete(id);
    res.status(200).send(selectedCharacter);
  }
  catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;