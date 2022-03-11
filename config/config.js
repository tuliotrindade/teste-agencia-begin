require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTEGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "book-inventory",
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  }
}
