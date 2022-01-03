const jwt = require('jsonwebtoken')
const authenticate = (req,res,next)=>{
     var token = req.get('token')
     jwt.verify(token, process.env.SECRETTOKEN,((err,decoder)=>{
          if(err){
               return res.status(401).send({message: "not authenticate"})

          }
          else{
               req.body['data'] = decoder;
               next();
          }
     }))
}

module.exports = authenticate;