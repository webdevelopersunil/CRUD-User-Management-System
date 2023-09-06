const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');

/**
 * Customer Router
 */
router.get('/', customerController.homepage);


module.exports = router;