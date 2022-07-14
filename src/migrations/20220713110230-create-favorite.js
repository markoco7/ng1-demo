'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favorite', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      favorite_id: {
        type: Sequelize.UUID
      },
      favorite_name: {
        type: Sequelize.STRING
      },
      favorite_type: {
        type: Sequelize.STRING
      },
      favorite_referral_code: {
        type: Sequelize.STRING
      },
      service_id: {
        type: Sequelize.STRING
      },
      param: {
        type: Sequelize.STRING
      },
      boosters:{
        type: Sequelize.JSONB
      },
      is_shared:{
        type: Sequelize.BOOLEAN
      },
      param: {
        type: Sequelize.STRING
      },
      biller_tag: {
        type: Sequelize.STRING
      },
      first_field: {
        type: Sequelize.STRING
      },
      second_field: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT
      },
      msisdn: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('favorite');
  }
};