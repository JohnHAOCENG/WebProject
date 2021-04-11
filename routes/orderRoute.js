const express = require('express');
const router = express.Router();

var orderController = require("../controllers/orderController");

router.post('/create', orderController.orderCreatPost);

router.get('/:vendorID',orderController.orderListGet);
router.get('/update/:vendorID',orderController.orderUpdatePost);
module.exports = router;