const express = require('express');
const router = express.Router();

var vendorController = require('../controllers/vendorController')

router.get('/',vendorController.vendorStatusPageGet);

router.get('/order',vendorController.vendorOutstandingOrderPageGet);

module.exports = router;