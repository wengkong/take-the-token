require('dotenv').config()

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.DEV_DB_HOST,
      user : process.env.DEV_DB_USER,
      password : process.env.DEV_DB_PASSWORD,
      database : process.env.DEV_DB_NAME
      //filename: './dev.mysql'
    },
    migrations: {
      directory: __dirname + '/db/migrations'      
    }
  },

  staging: {
    client: 'mysql',
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
  },

  production: {
    client: 'mysql',
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
