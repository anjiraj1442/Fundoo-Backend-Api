//imports
const express = require("express");
//create Router
const router = express.Router();
const controller = require('../Controller/controller')
//register path
router.post('/register',controller.Registration);
module.exports = router