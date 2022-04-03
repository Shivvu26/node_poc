'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const question = queryInterface.createTable('Questions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      questionText: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isAnonymousUser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Sequence: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      QuestionAlias: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      HideQuestionText: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }

    })
    return question;

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};

