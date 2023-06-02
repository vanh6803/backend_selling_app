var express = require("express");
var router = express.Router();
var manufacturerController = require("../controllers/manufacturer.controller");
var multer = require('multer');
var uploader = multer({ dest: './tmp' });

router.get("/", manufacturerController.list);

router.get("/add", manufacturerController.add);
router.post("/add", uploader.single('logo'), manufacturerController.add);

router.get("/edit/:id", manufacturerController.edit);
router.post("/edit/:id", uploader.single('logo'), manufacturerController.edit);

router.post("/delete/:id", manufacturerController.delete);

module.exports = router;
