'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReserveHabs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      departureDate: {
        type: Sequelize.DATE,
      },
      returnDate: {
        type: Sequelize.DATE,
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Rooms',
          },
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReserveHabs');
  },
};
