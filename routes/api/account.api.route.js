var express = require("express");
var router = express.Router();
var accountController = require('../../controllers/api/account.api.controller')
const authMiddleware = require('../../middleware/auth.middleware')

router.get('/check-email', accountController.searchUser)
router.put('/update-profile/:id',authMiddleware.api_auth ,accountController.update)

module.exports = router;