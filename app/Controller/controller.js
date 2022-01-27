//impot service
const service = require("../Service/service");
const logger = require("../Configdb/logger");
//const winston = require('winston')

class RegistrationClass {
  async Registration(req, res) {
    await service
      .UserRegistration(req.body, res) //body content
      .then((result) => {
        console.log("succesfull", result);
        res.send(result);
      })
      .catch((err) => {
        //console.log("fail",err);
        logger.error("fail", err);
        return res.status(404).send(err);
      });
  }

  async loginControll(req, res) {
    await service
      .loginServices(req.body, res)
      .then((result) => {
        logger.info("login succes");
        //res.send(result)
        //console.log(result)
        return res.send(JSON.stringify(result));
      })
      .catch((err) => {
        //console.log(err)
        logger.error("error while login", err);
        return res.send(JSON.stringify(err));
      });
  }

  async frgtpssControl(req, res) {
    await service
      .frgtpassService(req.body, res)
      .then((result) => {
        //console.log(result)
        res.send(result);
        res.send(JSON.stringify(result));
      })
      .catch((err) => {
        //console.log(err)
        logger.error("error in forgot password operation");
        res.send(JSON.stringify(err));
      });
  }

  async rstpassControl(req, res) {
    await service
      .rstpassService(req.body, res)
      .then((result) => {
        console.log(result);
        res.send(JSON.stringify(result));
      })
      .catch((err) => {
        //console.log(err)
        logger.error("error in resetpassword operation", err);
        res.send(JSON.stringify(err));
      });
  }
}
//export the registrationclass
module.exports = new RegistrationClass();
