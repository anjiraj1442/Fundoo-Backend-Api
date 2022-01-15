//imports
const mongoose = require("mongoose");

//data base schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
   
  },
  lastName: {
    type: String,
   
  },
  email: {
     type: String,
    
   },
   password: {
     type: String,
   }
   },
   {
     timestamps: true
   
   
 });


const User = mongoose.model("LoginProject", userSchema);
//usermodel class
class UserModelClass{
  findUser(req) {
    var response = {
         message: "",
         data: "",
         success: "",
         status: 200
   };
   return new Promise((resolve, reject) => {
     User.findOne(req)    
       .then((data) => {
         if (data) {
           (response.success = true),
             (response.data = data),
             (response.status = 422),
             (response.message = "user is already exist");
           resolve(response);
         } else {
           resolve({
             message: "user not found please register first",
             data: data,
             status: 400
           });
         }
       })
       .catch((err) => {
         console.log(err)
         reject({ success: false, error: err });
       });
   });
 }
 
    //register
   RegisterUser(req) {
   var response = {
       success: true,
       message: "",
       data: "",
       status:200
   };

   return new Promise((resolve, reject) => {
     req
       .save()
       .then((data) => {
         (response.success = true),
           (response.message = " Registered Succesfully"),
           (response.data = data),
           (response.status = 200);
         resolve( response );
       })
       .catch((err) => {
         (response.success = false),
           (response.message = " Registered Failed"),
           (response.data = ""),
           (response.status = 500);
         reject(err);
          
          
       });
   });
 }
}

   

//export the cls and schema
module.exports = {UserModelClass,User}