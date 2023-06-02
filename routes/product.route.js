var express = require("express");
var router = express.Router();
var productController = require("../controllers/product.controller");
var multer = require('multer');
var uploader = multer({ dest: './tmp' });

router.get("/", productController.list);

router.get("/detail/:id", productController.detail);

router.get("/add", productController.add);
router.post("/add",uploader.single('image'), productController.add);

router.get("/edit/:id", productController.edit);
router.post("/edit/:id",uploader.single('image'), productController.edit);

router.get("/delete/:id", productController.delete);
router.post("/delete/:id", productController.delete);

module.exports = router;
