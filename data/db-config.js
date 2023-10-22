const knex = require('knex');
const config = require('../knexfile');
// eslint-disable-next-line no-undef
const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(config[dbEnv])