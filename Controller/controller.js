//impot service
const service = require('../Service/service');

class RegistrationClass{
     Registration(req,res){
          service.UserRegistration(req.body)
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

     // forgotPasswordControll(req,res){
     //      service.forgotPasswordService(req).then((result)=>{
     //           console.log(result);
     //           res.send(JSON.stringify(result))
     //      })
     //      .catch((error)=>{
     //           res.send(JSON.stringify(error))
     //      })
     // }
}
//export the registrationclass
module.exports = new RegistrationClass();
