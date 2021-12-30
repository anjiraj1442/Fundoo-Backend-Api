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
}


//export the registrationclass
module.exports = new RegistrationClass();
