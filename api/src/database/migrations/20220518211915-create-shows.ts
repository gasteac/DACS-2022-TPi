'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      seat: {
        type: Sequelize.INTEGER
      },
      dateShow: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.REAL
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shows');
  }
};