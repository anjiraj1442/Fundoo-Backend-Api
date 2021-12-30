//imports
const model = require("../Model/model")
const bcrypt = require("bcrypt");
const UserModelInstance = new model.UserModel();
const newmodel = model.User;
//serviceclass
class ServicesClass{
     UserRegistration(obj){
          let newuser = new newmodel({
               "firstName": obj.firstName,
               "lastName": obj.lastName,
               "email":obj.email,
               "password":obj.password
          });
          
          let savedData = UserModelInstance.Registration(newuser)//pass data to model  and get status
          return savedData;//return the saved data

     }
}
module.exports= new ServicesClass();