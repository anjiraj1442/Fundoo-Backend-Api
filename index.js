//imports
const express = require("express");
const dotenv = require('dotenv');
dotenv.config({path: '.env'})
console.log(process.env.PORT);
const router = require("./Router/router")
const expressValidator = require("express-validator")
let dbconnection = require("./Configdb/config")
// start your app
let app = express();
app.use(expressValidator())
// middleware
//app.use(expressValidator);
app.use(express.json())

app.use("/", router);
app.get("/",(req,res)=>{
  res.send("welcome mesage");
})
//listen port number at 3636
const PORT = process.env.PORT 
app.listen(PORT, ()=>{
  console.log("server is listening");
})
//db connection
dbconnection.connection();