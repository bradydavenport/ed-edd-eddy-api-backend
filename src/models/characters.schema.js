'use strict';

const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('characters', {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  });
};