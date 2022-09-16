'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nicknames: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      default: [],
      allowNull: true,
    },
    credits: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      default: [],
      allowNull: true,
    },
    portrayer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hairColor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    friends: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      default: [],
      allowNull: true,
    },
    enemies: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    firstAppearance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};