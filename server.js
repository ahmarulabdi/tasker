'use strict'

require('dotenv').config()

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT,
    routes = require('./app/routes/approutes')

app.listen(port)

console.log('task list RESTful API server started on: ' + port)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)
