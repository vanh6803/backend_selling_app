var express = require("express");
var router = express.Router();
var accountController = require('../../controllers/api/account.api.controller')
const authMiddleware = require('../../middleware/auth.middleware')



module.exports = router;