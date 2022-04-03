'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CreatedDate: {
        type: Sequelize.DATE,
      },
      TripId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      EnrolleeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: 'Enrollees',
          },
          key: 'id'
      }
      
      },
      MedicaidCountee: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ReporterName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ReporterPhoneNumber: {
        type: Sequelize.STRING,

      },
      AssignedTo:{
        type:Sequelize.STRING,
        
      },
      TripConcernType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PriorityId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CIN: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MasFeedbackTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ManagerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SupervisorName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      InteractionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      IncidentDescriptionJustified: {
        type: Sequelize.STRING,
        allowNull: false
      },
      StatusId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Initial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      LastModifiedDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },


    })
  },

  down: async (queryInterface, Sequelize) => {

  }
};
