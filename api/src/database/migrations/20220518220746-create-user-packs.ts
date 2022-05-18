'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserPacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subTotal: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      pending: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },

      packId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Packs',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserPacks');
  },
};
