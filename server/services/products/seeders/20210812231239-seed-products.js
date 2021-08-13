'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [
        {
          image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/442899/item/goods_19_442899.jpg?width=1600&impolicy=quality_75",
          name: 'Jaket Wool Blend',
          sku: 12345,
          stocks: 50,
          price: 200000,
          marketplace_price: 300000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443960/item/goods_36_443960.jpg?width=1600&impolicy=quality_75",
          name: 'Kemeja Katun Pintuck Kotak',
          sku: 21345,
          stocks: 50,
          price: 300000,
          marketplace_price: 450000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
