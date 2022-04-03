'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enrollees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      FirstName:{
        type: Sequelize.STRING,
        allowNull:false
      },
      LastName:{
        type: Sequelize.STRING,
        allowNull:false
      },
      PhoneNumber:{
        type: Sequelize.STRING,
        allowNull:false
      },
      Email:{
        type: Sequelize.STRING,
        allowNull:false
      },

    })
  },

  down: async (queryInterface, Sequelize) => {
 
  }
};
