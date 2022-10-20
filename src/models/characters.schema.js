'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('characters', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nicknames: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      default: [],
    },
    credits: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      default: [],
    },
    portrayer: {
      type: DataTypes.STRING,
    },
    hairColor: {
      type: DataTypes.STRING,
    },
    friends: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      default: [],
    },
    enemies: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    firstAppearance: {
      type: DataTypes.STRING,
    },
  });
};