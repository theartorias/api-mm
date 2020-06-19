const knex = require('knex');
const configuration = require('../../knexfile');
var dbConfig = {
    client: 'mysql2',
    connection: {
      host     : 'br604.hostgator.com.br',
      user     : 'hubexp43_hector',
      password : 'Hector@2020',
      database : 'hubexp43_banco_mm'
    }
  };
const connection = knex(dbConfig);

module.exports = connection;