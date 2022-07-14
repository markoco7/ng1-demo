'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  favorite.init({
    user_id: DataTypes.STRING,
    favorite_id: DataTypes.UUID,
    favorite_name: DataTypes.STRING,
    favorite_type: DataTypes.STRING,
    favorite_referral_code: DataTypes.STRING,
    service_id: DataTypes.STRING,
    param: DataTypes.STRING,
    boosters: DataTypes.JSONB,
    is_shared: DataTypes.BOOLEAN,
    biller_tag: DataTypes.STRING,
    first_field: DataTypes.STRING,
    second_field: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    msisdn: DataTypes.STRING,
    status: DataTypes.STRING,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'favorite',
  });
  return favorite;
};