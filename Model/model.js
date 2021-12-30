//imports
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//data base schema
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
   
  },
  lastName: {
    type: String,
   
  },
  email: {
     type: String,
    
   },
   password: {
     type: String,
   }
   },{
     timestamps: true
   
   
});

//hashing password and storing in db
UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.hash(this.password, 8, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  }
});

//comparing given passwords and from database
UserSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error("password missing");

  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    console.log("error while comparing password", error.message);
  }
};

const User = mongoose.model("LoginProject", UserSchema);
//usermodel class
class UserModel{
     Registration(req){
          let response={
               "success": true,
               "message":"",
               "data":""
          }
          return new Promise((resolve,reject)=>{
                //save the data in db
               req.save().then((data)=>{
                    console.log(data);
                    response.success= true,
                    response.message="successfully register",
                    response.data=data,
                    response.status=200
                    resolve({response})
                    // 200-299 success
                    // 400-499--- client
                    // 500-599 server
               })
               .catch((data)=>{
                    response.success= false,
                    response.message="failed register",
                    response.data=data,
                    response.status=500
                    reject({response})
               })
          })
     }

}

   

//export the cls and schema
module.exports = {UserModel,User}