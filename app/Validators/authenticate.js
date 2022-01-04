//imports
const jwt = require('jsonwebtoken')

const authenticate = (req,res,next)=>{
     var token = req.headers['token']
     console.log(token);
     jwt.verify(token, process.env.SECRETTOKEN ,((err,decoder)=>{

          if(err){
               return res.status(401).send({message: "not authenticate",err})
          }
          else{
               req.body['data'] = decoder;
               req.token= decoder;
               console.log(decoder);
               next();
               
          }
     }))
}
//exports
module.exports = authenticate;