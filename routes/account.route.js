var express = require("express");
var router = express.Router();
var accountController = require("../controllers/account.controller");

/* GET home page. */
router.get("/", accountController.list);

router.get("/add", accountController.add);
router.post("/add", accountController.add);

router.get("/edit/:id", accountController.edit);
router.put("/edit/:id", accountController.edit);

router.get("/delete/:id", accountController.delete);
router.delete("/delete/:id", accountController.delete);

module.exports = router;