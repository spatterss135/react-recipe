'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      save_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      summary: {
        type: Sequelize.TEXT
      },
      diets: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      spoonacularSourceUrl: {
        type: Sequelize.STRING
      },
      healthScore: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes');
  }
};