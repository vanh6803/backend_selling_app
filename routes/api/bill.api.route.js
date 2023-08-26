var express = require("express");
var router = express.Router();
var billController = require('../../controllers/api/bill.api.controller')
const authMiddleware = require('../../middleware/auth.middleware')

router.post('/add-bill',billController.addBill)

module.exports = router;