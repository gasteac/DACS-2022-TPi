'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('hotels', [
  {
  name: 'Victory Royale',
  address: 'Avenida Siempreviva 546387',
  phone: '156541',
  },
  {
    name: 'Hotel California',
    address: 'California 231',
    phone: '23541567',
  },
  {
    name: 'Mordor Hotel',
    address: 'French 416',
    phone: '321245',
  },
  {
    name: 'A Named Hotel',
    address: 'A real Street 1563',
    phone: '56546548',
  },
  {
    name: 'Hotel Vago',
    address: 'UnderBridge 1565',
    phone: '6969696969',
  }]);
 },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('hotels', null, {});

  }
};
