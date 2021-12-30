const express = require("express");
const mongoose = require("mongoose");
const router = require("./Router/router");

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
    console.log("Applicaion is running at ");
});
//mongoose connection
mongoose.connect('mongodb://localhost:27017/LoginProject', (err)=>{
    if(err){
      console.log("db erorr", err)
    }
    else{
      console.log("db connected succesfuuly")
    }
});