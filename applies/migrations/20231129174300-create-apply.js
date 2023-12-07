'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resumeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vacancyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull:false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull:false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applies');
  }
};
