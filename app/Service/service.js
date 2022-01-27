//imports
const model = require("../Model/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const nodemailer = require('nodemailer')
require("dotenv").config;
const nodemailer = require("../Validators/nodemailer");
//const { reject } = require("bcrypt/promises");
const UserModelInstance = new model.UserModelClass();
const newmodel = model.User;
require("dotenv").config();
//serviceclass
class ServicesClass {
  async UserRegistration(obj, res) {
    let foundUser = await UserModelInstance.findUser(obj);
    if (!foundUser.data) {
      const passwordHash = await bcrypt.hash(obj.password, 10);
      var newuser = new newmodel({
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        password: passwordHash,
      });
    }
    let savedData = UserModelInstance.RegisterUser(newuser); //pass data to model  and get status
    return savedData; //return the saved data
  }

  async loginServices(req, res) {
    let userDetails = await UserModelInstance.findUser({ email: req.email });
    console.log(userDetails);
    if (userDetails.data) {
      console.log(userDetails, "find user");
      let passwordVerify = await bcrypt.compare(
        req.password,
        userDetails.data.password
      );
      if (passwordVerify) {
        const payload = {
          id: userDetails.data._id,
          email: userDetails.data.email,
        };
        console.log(passwordVerify);
        const token = jwt.sign(payload, process.env.SECRETTOKEN);
        return {
          message: "Login success",
          userId: userDetails.data._id,
          firstname: userDetails.data.firstName,
          lastname: userDetails.data.lastName,
          email: userDetails.data.email,
          createdAt: userDetails.data.createdAt,
          success: "",
          token: token,
          status: 200,
        };
      } else
        return new Promise((resolve, reject) => {
          reject({
            statusCode: 400,
            name: "Error",
            message: "invalid password",
            code: "LOGIN_FAILED",
          });
        });
    } else return userDetails;
  }

  async frgtpassService(req) {
    let email = { email: req.email };
    let userDetails = await UserModelInstance.findUser(email);

    if (userDetails.data) {
      let token = jwt.sign(
        { email: userDetails.data.email, id: userDetails.data._id },
        process.env.SECRETTOKEN,
        { expiresIn: "1d" }
      );
      console.log(token);
      console.log("Sending email to ", userDetails.data.email);
      console.log(userDetails.data.email, "hi");
      let status = nodemailer.sendMail(userDetails.data.email);

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
      let passwordHash = await bcrypt.hash(req.password, 10);
      var updatedData = newmodel.updateOne(
        { _id: req.data.id },
        { password: passwordHash }
      );
      return updatedData;
    } else return updatedData;
  }
}
//exports
module.exports = new ServicesClass();
