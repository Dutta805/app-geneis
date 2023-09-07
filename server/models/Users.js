const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Users = sequelize.define('Users', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false, // Enable timestamps (createdAt and updatedAt)
  tableName: 'Users', // Make sure the table name matches your database
});

module.exports = Users;