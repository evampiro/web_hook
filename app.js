const express = require("express")
const app = express()
const compression = require("compression")
const cors = require("cors")
// const errorController = require("../controllers/errorController")
const crypto = require('crypto');
const exec = require('child_process').exec;

app.use(compression())
app.use(express.json())
app.use(cors({ origin: "*" }))

// site1 endpoint
app.post("/site1",(req,res,next)=>{
    try{
      
     
    
      if(req.body)
      {
         const chunk =JSON.stringify(req.body)
            let sig = "sha1=" + crypto.createHmac('sha1', process.env.SITE1_SECRET).update(chunk.toString()).digest('hex');
    	
            if (req.headers['x-hub-signature'] == sig) {
               const command = `git -C ${process.env.SITE1_PATH} pull`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            res.end()
            return;
        }
        console.log(`Command executed successfully: ${stdout}`);
    });
        
            }
  
    
      
    	
       res.end()
    }}
    catch(e)
    {
        console.log(e)
    }
})



module.exports = app