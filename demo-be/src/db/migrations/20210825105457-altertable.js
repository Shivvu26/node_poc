'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const alter = queryInterface.addColumn('Questions',
    //   'HideQuestionText',
    //   Sequelize.BOOLEAN

    // )
    // return alter;

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};