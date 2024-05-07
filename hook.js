const dotenv = require("dotenv");
const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

dotenv.config()
const app = require('./app')

var httpserver = http.createServer(app)



httpserver.listen(process.env.PORT, function () {
    console.log("server started")
})

