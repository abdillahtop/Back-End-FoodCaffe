require('dotenv').config() //initialize dotenv config

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user:  'YabnDOJKlJ',
    password: 'L8fgUw9JGT',
    database: 'YabnDOJKlJ',
})

connection.connect((err) => {
    if (err) console.log(`Error ${err}`)
})

module.exports = connection