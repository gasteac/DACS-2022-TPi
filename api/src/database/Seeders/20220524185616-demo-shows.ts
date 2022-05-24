'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('shows', [
  {
  name: 'La chanpions',
  seat : 3235,
  dateShow: '2022-12-12 08:00:00', 
  amount: 50000,
  },
  {
    name: 'Argentina vs Alemania Remastered',
    seat : 4568,
    dateShow: '2022-12-12 08:00:00', 
    amount: 2001,
    },
    {
      name: 'T1 vs G2',
      seat : 32000,
      dateShow: '2022-12-12 08:00:00', 
      amount: 4351,
      },
      {
        name: 'Naruto vs Ichigo el musical',
        seat : 5,
        dateShow: '2022-12-12 08:00:00', 
        amount: 90000,
        },
        {
          name: 'Kent Beck vs la seleccion de voley de Austria ',
          seat : 1523154,
          dateShow: '2022-12-12 08:00:00', 
          amount: 50,
          },
]);
 },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('shows', null, {});

  }
};