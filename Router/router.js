//imports
const express = require("express");

const controller = require('../Controller/controller');
const validator = require("../Validators/validation");

//create Router
const router = express.Router();
//register path
router.post('/register',validator.registerValidate, controller.Registration);//validator.validate,
router.post('/login',validator.loginValidate,   controller.loginControll)
//exports
module.exports = router