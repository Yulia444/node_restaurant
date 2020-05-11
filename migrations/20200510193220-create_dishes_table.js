'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('dishes', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      picture: Sequelize.STRING(48),
      description: Sequelize.TEXT,
      price: Sequelize.INTEGER,
      dish_type: Sequelize.ENUM({
          values: ['appetizers', 'salads', 'pasta & rissoto', 'seafood', 'from the grill',
      'main dishes', 'desserts']
      })
      });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('dishes');

  }
};
