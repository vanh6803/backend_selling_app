var express = require("express");
var router = express.Router();
var manufacturerController = require('../../controllers/api/manufacturer.api.controller')

router.get("/", manufacturerController.listManufacturer);

router.get("/add", manufacturerController.listManufacturer);
router.post("/add", manufacturerController.listManufacturer);

module.exports = router;