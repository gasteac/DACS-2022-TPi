'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    //TODO -- COMO SE HACE ESTO AAAAA
  return queryInterface.bulkInsert('packages', [
  {
  
  }
  ]);
 },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('packages', null, {});

  }
};