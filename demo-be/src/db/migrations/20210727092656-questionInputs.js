'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionInputs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      QuestionId: {
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
      Sequence: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      InputTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      Validation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isRequired: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    return queryInterface.dropTable('QuestionInputs');
  }
};
