
require('dotenv').config();
const Sequelize = require('sequelize');
const dbSchema = require('../models/favorite')


/**
 * Generic logger
 *
 * @param {String} method - log method e.g. info | error
 * @param {String} type - log title
 * @param {String|Object} details - log details
 */
const logDetails = (method, type, details, stringify = true) => {
  const errDetails = details && details.toString().indexOf('Error:') >= 0 ? `${details} - ` : '';
  console[method]({
    type,
    information: !stringify || JSON.stringify(details) === '{}' ? details : `${errDetails}${JSON.stringify(details)}`,
  });
};

/**
 * Manually extracts the generated query from a sequelize log.
 * @param {String} data - Default SQL log of sequelize
 * @returns {String} Returns the generated raw query
 */
const getQuery = (data) => {
  const toRemove = 'Executing (default): ';
  const query = data.substring(toRemove.length);
  return query;
};

/**
 * Log SQL queries
 *
 * @param {Object} data - Sequelize data
 */
const logSQLQuery = (data) => {
  logDetails('info', 'SQL_QUERY', { query: getQuery(data) });
};


const initializeDb = () => {
  const sequelize = new Sequelize('mydb', 'postgres', 'magnum357', {
    host: "database-2-instance-1.cglyyysql6wn.us-east-1.rds.amazonaws.com",
    dialect: 'postgres',
    define: {
      // Set model name same as table name
      freezeTableName: true,
      // Set all variables in model to be underscored when creating the table
      underscored: true,
    },
    // Use custom logger for Sequelize
    logging: (data) => logSQLQuery(data),
  });


  const db = {};

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  db.Model = dbSchema(sequelize, Sequelize);

  return db;
};

module.exports = {
  initializeDb,
};
