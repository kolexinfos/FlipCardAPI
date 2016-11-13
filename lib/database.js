/**
 * Created by tthlex on 04/02/16.
 */
var Sequelize = require('sequelize');
module.exports = new Sequelize(
    'flipcard',
    FLIPCARD.config.db.user,
    FLIPCARD.config.db.password,
    {
      dialect: 'mysql'
    }
);