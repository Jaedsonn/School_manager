'use strict';

const {students, generateHash} = require('../../utils/generate_hash');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alunos', 
      students.map((student) => {
        const { password, ...studentData } = student;
        return {
          ...studentData,
          password_hash: generateHash(password)
        }
      })
      , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alunos', null, {});
  }
}; 