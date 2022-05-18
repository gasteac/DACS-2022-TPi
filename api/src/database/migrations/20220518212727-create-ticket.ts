'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seat: {
        type: Sequelize.INTEGER
      },
      departureDate: {
        type: Sequelize.DATE
      },
      returnDate: {
        type: Sequelize.DATE
      },
      travelWayId: {
        type: Sequelize.INTEGER,references:{model:{tableName:'Travelways'},
        key: 'id'
      },
      },
      amount: {
        type: Sequelize.REAL
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};