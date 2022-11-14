var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./app/routers/home.router')(app)
require('./app/routers/book.router')(app) //goi nhu function, truyen vao bien app



app.listen(5000, () => {
    console.log("Server listening on port 5000")
})