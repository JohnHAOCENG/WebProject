const express = require('express');
const router = express.Router();

var snackController = require("../controllers/snackController");

// post register 
router.post('/addSnack',snackController.addSnack);

router.get('/',snackController.getSnackMenu);
router.get('/:id',snackController.getSnackDetail);

module.exports = router;