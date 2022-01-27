//imports
const controller = require("../Controller/controller");
const validator = require("../Validators/validation");
const aut = require("../Validators/authenticate");
const noteControll = require("../Controller/notecontroll");
const express = require("express");
//create Router
const router = express.Router();
//register path
router.post("/register", validator.registerValidate, controller.Registration); //validator.validate,
//login
// router.post('/testapi', (req,res) =>{
//      res.send("connected")
// })

router.post("/login", validator.loginValidate, controller.loginControll);
router.post("/forgotpassword", aut, controller.frgtpssControl);
router.post("/resetpassword", aut, controller.rstpassControl);
router.post("/notes", aut, noteControll.createNote);
router.get("/notes", aut, noteControll.getNote);
router.put("/notes", aut, noteControll.upadteNotes);
router.delete("/notes", aut, noteControll.deleteNotes);
router.get("/notes/isArchieved", aut, noteControll.isArchiveControll);
router.get("/notes/isDeleted", aut, noteControll.isDeletedControll);
//exports
module.exports = router;
