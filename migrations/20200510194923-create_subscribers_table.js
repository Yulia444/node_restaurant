'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('subscribers', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      email: Sequelize.STRING(36)
       });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('subscribers');

  }
};
