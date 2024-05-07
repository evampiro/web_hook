const dotenv = require("dotenv");
const http = require('http');


dotenv.config()
const app = require('./app')

var httpserver = http.createServer(app)



httpserver.listen(process.env.PORT, function () {
    console.log("server started")
})

