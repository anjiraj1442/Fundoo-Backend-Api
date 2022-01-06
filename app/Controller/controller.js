//impot service
const service = require('../Service/service');
const logger = require('../Configdb/logger')
class RegistrationClass{
    async Registration(req,res){
         await service.UserRegistration(req.body)//body content
          .then((result)=>{
               console.log("succesfull", result);

     
          })
          .catch((err)=>{
               //console.log("fail",err);
               logger.error("fail",err);
          })
     }

    async loginControll(req,res){
        await service.loginServices(req.body)
       .then((result)=>{
            console.log(result)
            res.send(JSON.stringify(result))
       })
       .catch((err)=>{
            console.log(err)
            res.send(JSON.stringify(err))
            logger.error("error while login", err)
       })
     }

     async frgtpssControl(req,res){
          await service.frgtpassService(req.body)
          .then((result)=>{
               console.log(result)
               res.send(JSON.stringify(result))
          })
          .catch((err)=>{
               //console.log(err)
               res.send(JSON.stringify(err))
               logger.error("error in forgot password operation")
          })
     }

     async rstpassControl(req,res){
       await   service.rstpassService(req.body)
          .then((result)=>{
               console.log(result)
               res.send(JSON.stringify(result))
          })
          .catch((err)=>{
               //console.log(err)
               res.send(JSON.stringify(err))
               logger.error("error in resetpassword operation",err)
          })
     }
    
}
//export the registrationclass
module.exports = new RegistrationClass();
