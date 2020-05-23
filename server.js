var express = require('express'),
    dotenv = require('dotenv').config(),
    app = express(),
    port = process.env.PORT || 3000

app.listen(port)

console.log('task list RESTful API server started on: '+ port)
