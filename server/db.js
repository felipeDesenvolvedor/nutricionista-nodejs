const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('nutricionista', 'root', '80178RooT@!*', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {sequelize, DataTypes, Model}