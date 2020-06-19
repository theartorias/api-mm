// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'br604.hostgator.com.br',
      user: 'hubexp43_hector',
      password: 'Hector@2020',
      database: 'hubexp43_banco_mm'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'myslq2',
    connection: {
      database: 'my_db',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
