require('dotenv').config() //initialize dotenv config

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'remotemysql.com',
    user: process.env.DB_USER || 'YabnDOJKlJ',
    password: process.env.DB_PASSWORD || 'L8fgUw9JGT',
    database: process.env.DB_NAME || 'YabnDOJKlJ',
})

connection.connect((err) => {
    if (err) console.log(`Error ${err}`)
})

module.exports = connection