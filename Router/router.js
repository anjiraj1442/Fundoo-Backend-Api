//imports
const express = require("express");
const controller = require('../Controller/controller');
//const validate = require("../Middleware/validation");

//create Router
const router = express.Router();
//register path
router.post('/register', controller.Registration);//validator.validate,
router.post('/login', controller.loginControll)
//exports
module.exports = router