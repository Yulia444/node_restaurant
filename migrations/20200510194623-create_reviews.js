'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('reviews', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      author: Sequelize.STRING(16),
      title: Sequelize.STRING(72),
      review: Sequelize.TEXT,
      date: Sequelize.DATE
       });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('reviews');

  }
};
