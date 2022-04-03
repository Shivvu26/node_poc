'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserAnswers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      questionInputId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userchatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('UserAnswers');
  }
};
