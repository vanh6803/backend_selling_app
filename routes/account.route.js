var express = require("express");
var router = express.Router();
var accountController = require("../controllers/account.controller");
var multer = require('multer');
var uploader = multer({ dest: './tmp' });

/* GET home page. */
// router.get("/", accountController.list);

// router.get("/add", accountController.add);
// router.post("/add",uploader.single('avatar'), accountController.add);

// router.get("/edit/:id", accountController.edit);
// router.post("/edit/:id",uploader.single('avatar'), accountController.edit);

// router.get("/delete/:id", accountController.delete);
// router.post("/delete/:id", accountController.delete);

module.exports = router;