/**
 * Created by tthlex on 06/02/16.
 */

//Note Database is a sequelize object/instance;
var Sequelize = require('sequelize');
var Database = require('../lib/database');
var User = Database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey: true
  },
  userType: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  state: Sequelize.STRING,
  localGovtArea: Sequelize.STRING,
  password: Sequelize.STRING,
  age: Sequelize.STRING,
  maritalStatus: Sequelize.STRING,
  profile: Sequelize.STRING,
  sex: Sequelize.STRING,
  documents: Sequelize.STRING,
  occupation: Sequelize.STRING,
  bbPin: Sequelize.STRING,
  dateCreated: Sequelize.DATE,
  dateUpdated: Sequelize.DATE,
  updatedBy: Sequelize.STRING,
  createdBy: Sequelize.STRING,
  lastLoginDate: Sequelize.DATE,
  authorised: Sequelize.BOOLEAN
});

module.exports = User;