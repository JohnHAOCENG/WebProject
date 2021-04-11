const express = require('express');
const router = express.Router();

var vendorController = require('../controllers/vendorController')

router.post('/register',vendorController.venodrRegister);
router.post('/park/:id',vendorController.venodrParkPost);

module.exports = router;