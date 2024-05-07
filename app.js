const express = require("express")
const app = express()
const compression = require("compression")
const cors = require("cors")
// const errorController = require("../controllers/errorController")

app.use(compression())
app.use(express.json())
app.use(cors({ origin: "*" }))

// site1 endpoint
app.post("/site1",(req,res,next)=>{
    try{
        req.on('data', function(chunk) {
            console.log(chunk)
            let sig = "sha1=" + crypto.createHmac('sha1', process.env.SITE1_SECRET).update(chunk.toString()).digest('hex');
    
            if (req.headers['x-hub-signature'] == sig) {
                exec('cd ' + process.env.SITE1_PATH + ' && git pull');
            }
        });
    
        res.end();
    }
    catch(e)
    {
        console.log(e)
    }
})

module.exports = app