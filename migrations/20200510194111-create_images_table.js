'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    link: Sequelize.STRING(48),
     });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('images');

  }
};
