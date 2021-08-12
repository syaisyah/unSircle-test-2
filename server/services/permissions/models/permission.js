'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permission.belongsTo(models.User)
    }
  };
  Permission.init({
    create_product: DataTypes.BOOLEAN,
    read_product: DataTypes.BOOLEAN,
    update__product: DataTypes.BOOLEAN,
    destroy_product: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};