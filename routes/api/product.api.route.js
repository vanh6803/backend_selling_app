var express = require("express");
var router = express.Router();
var productController = require('../../controllers/api/product.api.controller')

router.get("/", productController.listProduct);

module.exports = router;