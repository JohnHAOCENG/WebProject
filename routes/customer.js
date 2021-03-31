const express = require('express');
const router = express.Router();

var customerController = require("../controllers/customerContoller");

//get request from customer controller for detail
router.get('/', customerController.customersDetailGet)

//get post from customer controller for login
router.post('/login',customerController.customersLoginPost)

module.exports = router;
