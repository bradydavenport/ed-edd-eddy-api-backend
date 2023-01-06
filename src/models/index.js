'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const modelInterface = require('./modelInterface');
const characterSchema = require('./characters.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialect: 'postgres',
//   protocol: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//       native: true,
//     },
//   },
// });

const CharacterModel = characterSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  characterInterface: new modelInterface(CharacterModel),
};
