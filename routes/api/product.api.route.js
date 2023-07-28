var express = require("express");
var router = express.Router();
var productController = require('../../controllers/api/product.api.controller')
const authMiddleware = require('../../middleware/auth.middleware')
router.get("/", productController.listProduct);
router.get("/detail/:id", productController.detailProduct);

module.exports = router;