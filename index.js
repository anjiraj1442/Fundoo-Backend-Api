//imports
const express = require("express");
const logger = require('./app/Configdb/logger')
const dotenv = require('dotenv');
dotenv.config({path: '.env'})
console.log(process.env.PORT);
const router = require("./app/Router/router")
const expressValidator = require("express-validator")
let dbconnection = require("./app/Configdb/config")
// start your app
let app = express();
app.use(expressValidator())
// middleware
app.use(express.json())

app.use("/", router);
app.get("/",(req,res)=>{
  res.send("welcome mesage");
})
const PORT = process.env.PORT 
app.listen(PORT, ()=>{
  logger.error('server start at 3636')
  console.log('server is listening');
})
//db connection
dbconnection.connection();