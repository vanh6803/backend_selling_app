var express = require("express");
var router = express.Router();
var siteController = require('../../controllers/api/site.api.controller')
const authMiddleware = require('../../middleware/auth.middleware')

router.post("/login", siteController.login);
router.post("/register", siteController.reg);
router.get("/logout",authMiddleware.api_auth, siteController.logout);

module.exports = router;