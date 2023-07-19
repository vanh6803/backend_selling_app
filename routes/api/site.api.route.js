var express = require("express");
var router = express.Router();
var siteController = require('../../controllers/api/site.api.controller')

router.post("/login", siteController.login);
router.post("/register", siteController.reg);
router.get("/logout", siteController.logout);

module.exports = router;