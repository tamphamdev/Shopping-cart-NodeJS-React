const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({
  dest: './public/uploads/'
});

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const authMiddleware = require('../middlewares/auth.middleware');

router.get("/", authMiddleware.requireCookie, controller.index);
// query search 
router.get("/search", controller.search);

router.get("/create", controller.create);

router.post("/create",
  upload.single('avatar'),
  validate.postCreate,
  controller.postCreate);

router.get("/logout", controller.logout);
router.get("/:id", controller.get);

module.exports = router; // nhớ exports ko lại bị lỗi