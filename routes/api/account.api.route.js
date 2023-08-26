var express = require("express");
var router = express.Router();
const multer = require("multer");
const path = require("path");

// Set up multer storage and upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/user");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// const upload = multer({ dest: './public/images/user' });
const upload = multer({ storage: storage,
limits: {
  fileSize: 10000000
} });

var accountController = require("../../controllers/api/account.api.controller");
const authMiddleware = require("../../middleware/auth.middleware");

router.get("/check-email", accountController.searchUser);
router.put(
  "/update-profile/:id",
  authMiddleware.api_auth,
  accountController.updateData
);

router.put(
  "/edit-avatar/:id",
  upload.single("avatar"),
  authMiddleware.api_auth,
  accountController.editAvatar
);

module.exports = router;
