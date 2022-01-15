const chai = require('chai');
const chaiHttp = require('chai-http');
//const res = require('express/lib/response');
const fs = require('fs');
const server = require('../index');

chai.should();
chai.use(chaiHttp);

const rawdata = fs.readFileSync('test/userData.json');

const employeeJSON = JSON.parse(rawdata);
let jwToken = '';

describe("registertion",()=>{
     it('correct details should save in database',(done)=>{
          const inputDetails = employeeJSON.UserData1;
          chai.request(server)
              .post('/register')
              .send(inputDetails)
              .end((err,res)=>{
                   if(err){
                     done()
                   }
                   res.should.have.status(200)
                   done()
              })
     })
     it('if incorrect details should not save in database',(done)=>{
          const inputDetails = employeeJSON.UserData2;
          chai.request(server)
              .post('/register')
              .send(inputDetails)
              .end((err,res)=>{
               if(err){
                    done()
                  }
                   res.should.have.status(200)
                   done()
              })
     })

})

describe("login",()=>{
     it('correct details should login',(done)=>{
          const inputDetails = employeeJSON.UserData3;
          chai.request(server)
              .post('/login')
              .send(inputDetails)
              .end((err,res)=>{
               if(err){
                    done()
                  }
                   res.should.have.status(200)
                   done()
              })
     })

     it('if incorrect details should not login',(done)=>{
          const inputDetails = employeeJSON.UserData4;
          chai.request(server)
              .post('/login')
              .send(inputDetails)
              .end((err,res)=>{
               if(err){
                    done()
                  }
                   res.should.have.status(200)
                   done()
              })
     })
})
