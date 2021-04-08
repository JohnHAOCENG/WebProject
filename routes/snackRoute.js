const express = require('express');
const router = express.Router();

var snackController = require("../controllers/snackController");

// post register 
router.post('/addSnack',snackController.addSnack);

module.exports = router;