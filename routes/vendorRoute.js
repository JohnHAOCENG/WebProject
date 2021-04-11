const express = require('express');
const router = express.Router();

var vendorController = require('../controllers/vendorController')

router.post('/register',vendorController.vendorRegister);

router.post('/park/:id',vendorController.vendorParkPost);

module.exports = router;