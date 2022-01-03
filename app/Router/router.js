const controller = require('../Controller/controller');
const validator = require("../Validators/validation");
const aut = require('../Validators/authenticate')
const express = require("express");
//create Router
const router = express.Router();
//register path
router.post('/register', validator.registerValidate, controller.Registration);//validator.validate,

router.post('/login',aut,  validator.loginValidate,   controller.loginControll)
//exports
module.exports = router