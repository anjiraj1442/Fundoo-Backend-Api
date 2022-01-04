//imports
const mongoose = require("mongoose")
require('dotenv').config();
class DBconnection{
  connection=()=>{
    const url = process.env.URL;
     mongoose.connect(url, {
      //useNewUrlParser: true
     }).then(() => {
         console.log("Successfully connected to the database");    
     }).catch(err => {
         console.log('Could not connect to the database', err);
         process.exit();
     });  
 }
}  
//exports 
module.exports = new DBconnection();  