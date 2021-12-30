//imports
const express = require("express");
const router = require("./Router/router");
let dbconnection = require("./Configdb/config")

// start your app
let app = express();
//const router =  require('./router/router');

// middleware
app.use(express.json())
app.use("/", router);
app.get("/",(req,res)=>{
  res.send("welcome mesage");
})
//listen port number at 3636
app.listen(3636,(req,res)=> {
    console.log("Applicaion is running at 3636 port number ");
});
//db connection
dbconnection.db();