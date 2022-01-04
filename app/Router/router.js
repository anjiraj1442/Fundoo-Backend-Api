//imports
const controller = require('../Controller/controller');
const validator = require("../Validators/validation");
const aut = require('../Validators/authenticate');
const noteControll = require('../Controller/notecontroll')
const express = require("express");
//create Router
const router = express.Router();
//register path
router.post('/register', validator.registerValidate, controller.Registration);//validator.validate,
//login
router.post('/login',aut, validator.loginValidate,   controller.loginControll)
router.post('/createnotes',aut, noteControll.createNote)

//exports
module.exports = router