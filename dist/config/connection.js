"use strict";const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

const connection = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',

    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

module.exports = connection;
