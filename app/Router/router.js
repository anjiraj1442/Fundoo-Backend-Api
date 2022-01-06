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
router.post('/login', validator.loginValidate,controller.loginControll)
router.post('/forgotpassword',aut,controller.frgtpssControl)
router.post('/resetpassword',aut,controller.rstpassControl)
router.post('/createnotes',aut, noteControll.createNote)
router.get('/getNotes',aut, noteControll.getNote)
//router.post('/updateNotes',aut,noteControll.upadteNotes)
router.delete('/deletenotes',aut,noteControll.deleteNotes)
router.get('/isArchieved',aut,noteControll.isArchiveControll)
router.get('/isDeleted',aut,noteControll.isDeletedControll)
//exports
module.exports = router