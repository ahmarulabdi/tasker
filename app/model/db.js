'use strict'

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect(function (err) {
    if (err) throw err
})

module.exports = connection
