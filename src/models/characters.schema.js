'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('characters', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
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
    hair_color: {
      type: DataTypes.STRING,
    },
    friends: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      default: [],
    },
    enemies: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    first_appearance: {
      type: DataTypes.STRING,
    },
    link_to_bio: {
      type: DataTypes.STRING,
    },
  },
  {timestamps: false});
};