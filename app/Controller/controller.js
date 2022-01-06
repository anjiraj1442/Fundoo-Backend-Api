//impot service
const service = require('../Service/service');

class RegistrationClass{
    async Registration(req,res){
         await service.UserRegistration(req.body)//body content
          .then((result)=>{
               console.log("succesfull", result);

     
          })
          .catch((err)=>{
               console.log("fail",err);
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
       })
     }

     async frgtpssControl(req,res){
          await service.frgtpassService(req.body)
          .then((result)=>{
               console.log(result)
               res.send(JSON.stringify(result))
          })
          .catch((err)=>{
               console.log(err)
               res.send(JSON.stringify(err))
          })
     }

     async rstpassControl(req,res){
       await   service.rstpassService(req.body)
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
