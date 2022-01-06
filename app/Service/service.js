//imports
const model = require("../Model/model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
//const nodemailer = require('nodemailer')
require('dotenv').config
const nodemailer = require('../Validators/nodemailer')
//const { reject } = require("bcrypt/promises");
const UserModelInstance = new model.UserModelClass();
const newmodel = model.User;
require('dotenv').config();
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
             const payload = { id:findUser.data._id, email:findUser.data.email}
              const token = jwt.sign(payload, process.env.SECRETTOKEN)
              return {
                  message: "Login success",
                  userId: findUser.data._id,
                  firstname: findUser.data.firstName,
                  lastname: findUser.data.lastName,
                  email: findUser.data.email,
                  createdAt: findUser.data.createdAt,
                  success: "",
                  token: token,
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

     async frgtpassService(req) {
        let response = {
          success: true,
          message: "",
          data: "",
        };
        let email = { email: req.email };
        let foundUser = await UserModelInstance.findUser(email);
    
        if (foundUser) {
          
          let token = jwt.sign(
            { email: foundUser.email, id: foundUser.id },"keyvalue"
            
          );
          let address = "http://127.0.0.1:3636/forgotpassword/";
    
          let link = address + token;
    
          console.log("Sending email to ", foundUser.email);
    
          let status =  nodemailer.sendMail(foundUser.data.email, link);
          return status;
        } else {
          (response.success = false), (response.message = "User Not Found");
          (response.data = ""), (response.status = 400);
          return response;
        }
    }
     async rstpassService(req, res) {
       let foundUser = await UserModelInstance.findUser({ _id: req.data.id });
         if (foundUser) {
          let hash = await bcrypt.hash(req.password, 10)
          var updatedData = newmodel.updateOne({ _id: req.data.id }, { password: passwordHash });
          return updatedData;
        }
       else return foundUser;
     }




}
//exports
module.exports= new ServicesClass();