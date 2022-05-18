'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Insurances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.REAL
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Insurances');
  }
};