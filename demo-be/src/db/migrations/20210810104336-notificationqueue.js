'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('NotificationQueues', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      toEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fromEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      scheduledDate: {
        type: Sequelize.DATE,
      },
      servicedDate: {
      type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('NotificationQueue');
  }
};
