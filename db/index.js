require('dotenv').config()

const db = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DEV_DB_HOST,
        user : process.env.DEV_DB_USER,
        password : process.env.DEV_DB_PASSWORD,
        database : process.env.DEV_DB_NAME
    }
})

module.exports = db
