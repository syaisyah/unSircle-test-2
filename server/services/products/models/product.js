'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  Product.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    sku: DataTypes.STRING,
    stocks: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    marketplace_price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
    hooks: {
      beforeCreate: product => {
        product.sku = product.id + Math.random() * 200
      }
    }
  });
  return Product;
};