'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('insurances', [
  {
  name: 'La segunda by packo rabonne',
  amount: 2354,

  },
  {
    name: 'La tercera ndea',
    amount: 2884,
  
    },
  {
    name: 'La cuarta xd',
    amount: 2000,
    
     },
  ]);
 },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('insurances', null, {});

  }
};
