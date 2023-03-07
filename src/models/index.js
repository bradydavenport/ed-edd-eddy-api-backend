'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const modelInterface = require('./modelInterface');
const characterSchema = require('./characters.schema');
const episodesSchema = require('./episodes.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;

// const sequelize = new Sequelize(DATABASE_URL);

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const CharacterModel = characterSchema(sequelize, DataTypes);
const EpisodeModel = episodesSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  characterInterface: new modelInterface(CharacterModel),
  episodeInterface: new modelInterface(EpisodeModel),
};
