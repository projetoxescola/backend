const Sequelize = require('sequelize');

const dbConfig = require('../config/databaseConfig');

const connection = new Sequelize(dbConfig);

//Inits dos models

module.exports = connection;