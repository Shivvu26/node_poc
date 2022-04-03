'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionOptions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions',
            // schema: 'Schemas'
          },
          key: 'id'
        },
        allowNull: false,
        defaultValue: '0'
      },
      sequence: {
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
    return queryInterface.dropTable('QuestionOptions');
  }
};
