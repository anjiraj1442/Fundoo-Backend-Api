//imports
const express = require("express");
const controller = require('../Controller/controller')
//create Router
const router = express.Router();
//register path
router.post('/register',controller.Registration);
//exports
module.exports = router