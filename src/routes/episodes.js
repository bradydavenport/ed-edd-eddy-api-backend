'use strict';

const express = require('express');
const { episodeInterface } = require('../models');
const router = express.Router();

router.get('/api/episodes', async (req, res, next) => {
  try {
    let response = await episodeInterface.readAll();
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get('api/episodes/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let selectedEpisode = await episodeInterface.readOne(id);
    res.status(200).send(selectedEpisode);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post('/api/episodes', async (req, res, next) => {
  const episode = req.body;
  try {
    let response = await episodeInterface.create(episode);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete('/api/episodes/:id', async (req, res, next) => {
  const { id } = req.params;
  try{
    let selectedEpisode = await episodeInterface.delete(id);
    res.status(200).send(selectedEpisode);
  }
  catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;