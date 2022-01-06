//imports
const mongoose = require("mongoose")
require('dotenv').config();
const logger = require('../Configdb/logger')
class DBconnection{
  connection=()=>{
    const url = process.env.URL;
     mongoose.connect(url, {
      //useNewUrlParser: true
     }).then(() => {
         console.log("Successfully connected to the database");    
     }).catch(err => {
         //console.log(' Couldnect to the database', err);
         logger.error('Couldnect to the database');
         process.exit();
     });  
 }
}  
//exports 
module.exports = new DBconnection();  