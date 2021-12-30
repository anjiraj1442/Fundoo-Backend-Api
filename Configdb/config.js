//imports
const mongoose = require("mongoose")
class DBconnection{
  db = ()=>{
//mongoose connection
   mongoose.connect('mongodb://localhost:27017/LoginProject', (err)=>{
    if(err){
      console.log("db erorr", err)
    }
    else{
      console.log("db connected succesfuuly")
    }
});
}
}
module.exports=new DBconnection(); //export the DB connection class   