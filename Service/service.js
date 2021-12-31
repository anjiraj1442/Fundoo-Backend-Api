//imports
const model = require("../Model/model")
const bcrypt = require("bcrypt");
//const res = require("express/lib/response");
const UserModelInstance = new model.UserModel();
const newmodel = model.User;
//serviceclass
class ServicesClass{
   async  UserRegistration(obj,res){
          let foundUser = await UserModelInstance.findUser(obj);
          if (!foundUser.data){
               const passwordHash = await bcrypt.hash(obj.password, 10)
               var newuser = new newmodel({
                    "firstName": obj.firstName,
                    "lastName": obj.lastName,
                    "email":obj.email,
                    "password":passwordHash,
               });
          }
          
          
          let savedData = UserModelInstance.RegisterUser(newuser)//pass data to model  and get status
          return savedData;//return the saved data

     }

    async loginServices(req,res){
         let findUser = await UserModelInstance.findUser(req)
         if (findUser.data) {
              console.log(findUser, "find user");
          let passwordVerify = await bcrypt.compare(req.password, findUser.data.password)
          if (passwordVerify) {
              return {
                  message: "Login success",
                  userId: findUser.data._id,
                  firstname: findUser.data.firstName,
                  lastname: findUser.data.lastName,
                  email: findUser.data.email,
                  createdAt: findUser.data.createdAt,
                  success: "",
                  status: 200
              }
          }
          else return new Promise((resolve, reject) => {
              reject({
                  statusCode: 400,
                  name: "Error",
                  message: "invalid password",
                  code: "LOGIN_FAILED"
              })

          })
          }
      else return findUser;
  
     }
}
module.exports= new ServicesClass();