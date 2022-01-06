//impot service
const service = require('../Service/service');

class RegistrationClass{
     Registration(req,res){
          service.UserRegistration(req.body)//body content
          .then((result)=>{
               console.log("succesfull", result);

     
          })
          .catch((err)=>{
               console.log("fail",err);
          })
     }

     loginControll(req,res){
       service.loginServices(req.body)
       .then((result)=>{
            console.log(result)
            res.send(JSON.stringify(result))
       })
       .catch((err)=>{
            console.log(err)
            res.send(JSON.stringify(err))
       })
     }
     frgtpssControl(req,res){
          service.frgtpassService(req.body)
          .then((result)=>{
               console.log(result)
               res.send(JSON.stringify(result))
          })
          .catch((err)=>{
               console.log(err)
               res.send(JSON.stringify(err))
          })
        }
    
}
//export the registrationclass
module.exports = new RegistrationClass();
