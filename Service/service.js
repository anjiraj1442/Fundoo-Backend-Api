const model = require("../Model/model")
const userModelInstance = new model.UserModel();
const newmodel = model.User;
//serviceclass
class ServicesClass{
     UserRegistration(obj){
          let newuser = new newmodel({
               "firstName": obj.firstName,
               "lastName": obj.lastName,
               "email":obj.email,
               "password":obj.password
          })
          let savedData = userModelInstance.Registration(newuser)
          return savedData;//return the saved data

     }
}
module.exports= new ServicesClass();