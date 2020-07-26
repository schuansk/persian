const dotenv = require('dotenv')

dotenv.config()

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } = process.env

module.exports = {
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    logging: false,
    define: {
        timestamps: true,
        underscored: true
    }
}