'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tickets', [
      {
        seat: 1,
        departureDate: '2022-12-14 08:00:00',
        returnDate: '2022-12-15 08:00:00',
        travelWayId: 1,
        amount: 1700,
      },
      {
        seat: 2,
        departureDate: '2022-12-22 08:00:00',
        returnDate: '2022-12-27 08:00:00',
        travelWayId: 2,
        amount: 2000,
      },
      {
        seat: 3,
        departureDate: '2022-12-15 08:00:00',
        returnDate: '2022-12-17 08:00:00',
        travelWayId: 3,
        amount: 500,
      },
      {
        seat: 25,
        departureDate: '2021-12-12 08:00:00',
        returnDate: '2022-12-13 08:00:00',
        travelWayId: 4,
        amount: 1500,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tickets', null, {})
  }
};
