const express = require('express');
const router = express.Router();

var userController = require("../controllers/userController");

// post register 
router.post('/register',userController.userRegister);

module.exports = router;