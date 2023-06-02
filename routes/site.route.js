var express = require('express');
var router = express.Router();
var siteController = require('../controllers/site.controller')

/* GET home page. */
router.get('/', siteController.home);

module.exports = router;
