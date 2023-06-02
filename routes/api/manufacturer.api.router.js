var express = require("express");
var router = express.Router();
var manufacturerController = require('../../controllers/api/manufacturer.api.controller')

router.get("/", manufacturerController.listManufacturer);

module.exports = router;