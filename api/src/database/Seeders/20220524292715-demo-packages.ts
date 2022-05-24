'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('packages', [
  {
    name: 'Sex time starter pack',
    quantPeople: 4,
    ticketId: 1,
    hotelId: 1,
    insuranceId: 1, 
    showId: 1,
    total: 1.0,
  } ,
  {
    name: 'Sex time starter pack',
    quantPeople: 4,
    ticketId: 2,
    hotelId: 2,
    insuranceId: 2, 
    showId: 2,
    total: 2.0,
  },
  {
    name: 'Sex time starter pack',
    quantPeople: 4,
    ticketId: 3,
    hotelId: 3,
    insuranceId: 3, 
    showId: 3,
    total: 3.0,
  }
  ]);
 },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('packages', null, {});

  }
};