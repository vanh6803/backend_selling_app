var express = require("express");
var router = express.Router();
var accountController = require('../../controllers/api/account.api.controller')

router.post("/login", accountController.login);
router.post("/reg", accountController.reg);

module.exports = router;