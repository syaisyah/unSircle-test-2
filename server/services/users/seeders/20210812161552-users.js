// 'use strict';
// const { hashPassword } = require('../helpers/password-helper')

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert('Users',
//       [
//         {
//         full_name: 'Rafala',
//         email: 'rafala@mail.com',
//         password: hashPassword('admin123'),
//         nik: 321123456,
//         role: 'Super Admin',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         full_name: 'Nana',
//         email: 'nana@mail.com',
//         password: hashPassword('nana123'),
//         nik: 323455555,
//         role: 'Admin',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         full_name: 'Dina',
//         email: 'dina@mail.com',
//         password: hashPassword('dina123'),
//         nik: 324555999,
//         role: 'Employee',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//     ], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('Users', null, {});
//   }
// };
