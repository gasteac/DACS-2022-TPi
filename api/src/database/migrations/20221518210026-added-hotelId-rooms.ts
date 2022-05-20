'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Rooms', 'hotelId', {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Hotels',
          },
          key: 'id',
        },
        allowNull: false,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('Rooms', 'hotelId')]);
  },
};
