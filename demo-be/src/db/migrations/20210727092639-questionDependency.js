'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionDependencies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      QuestionDependentOn: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      DependentQuestionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions',
            // schema: 'Schemas'
          },
          key: 'id'
        },
        allowNull: true,
      },
      Value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('QuestionDependencies');
  }
};
