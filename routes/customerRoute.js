const express = require('express');
const router = express.Router();

var customerController = require("../controllers/customerController");

//get request from customer controller for detail
router.get('/', customerController.customerLocationGet)

router.get('/location', customerController.customerChooseLocationGet)

router.get('/login', customerController.customerLogInGet)

router.get('/register', customerController.customerRegisterGet)


//get post from customer controller for login
//router.post('/loginpost',customerController.customersLoginPost)

module.exports = router;
