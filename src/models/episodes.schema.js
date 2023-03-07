'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('episodes', {
    season: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season_episode_number: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    series_episode_number: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    title_card_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    episode_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scams_that_take_place: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    title_reference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    episode_synopsis: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    episode_airdate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false });
};
