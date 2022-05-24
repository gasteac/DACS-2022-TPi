'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('packages', [
      { 
        name:'Paquete Premium',
        quantPeople:6,
        ticketId: 1,
        hotelId: 1,
        insuranceId: 1,
        showId: 1,
        total: 4000,
      },
      { 
        name:'Paquete Familiar',
        quantPeople:4,
        ticketId: 2,
        hotelId: 2,
        insuranceId: 2,
        showId: 2,
        total: 6000,
      },
      { 
        name:'Paquete Pareja',
        quantPeople:2,
        ticketId: 3,
        hotelId: 3,
        insuranceId: 3,
        showId: 3,
        total: 8000,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('packages', null, {})
  }
};
