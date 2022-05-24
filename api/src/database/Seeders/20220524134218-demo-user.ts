'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Gaston',
        lastName: 'Acosta',
        cuit: '23-39193609-9',
        email: 'gasteac@gmail.com',
        password: 'pacheca',
        roleId: 1,
      },
      {
        firstName: 'Diego',
        lastName: 'Sosa',
        cuit: '23-95843536-9',
        email: 'dhsosa98@gmail.com',
        password: 'arepa',
        roleId: 1,
      },
      {
        firstName: 'Franco',
        lastName: 'Ruiz',
        cuit: '23-40000000-9',
        email: 'elfranco@gmail.com',
        password: 'duke',
        roleId: 2,
      },
      {
        firstName: 'Joaquin',
        lastName: 'Ramirez',
        cuit: '23-45465655-9',
        email: 'joaquingil@gmail.com',
        password: 'ellol',
        roleId: 2,
      },
      {
        firstName: 'Ariel',
        lastName: 'Acevedo',
        cuit: '23-644554353-9',
        email: 'arielgouter@gmail.com',
        password: 'gouter',
        roleId: 2,
      },
      {
        firstName: 'Tomas',
        lastName: 'Vilalta',
        cuit: '23-54543543-9',
        email: 'aguantedota@gmail.com',
        password: 'dota',
        roleId: 2,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', null, {})
  }
};
