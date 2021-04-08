const express = require('express');
const router = express.Router();

var orderController = require("../controllers/customerOrderController");

//get request from customer order controller for detail
router.get('/', orderController.customerOrderPageGet)

router.get('/confirm', orderController.customerOrderConfirmGet)

router.get('/:snack',orderController.customerSnackDetailsGet)


module.exports = router;