const Sequelize = require('sequelize');
module.exports = new Sequelize('mydb', 'postgres', 'magnum357', {
  host: 'database-2-instance-1.cglyyysql6wn.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});