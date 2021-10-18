const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const userApiController = require("../../controllers_db/api/userApiController");
const authMiddleware = require("../../middlewares/authMiddleware");
const guestMiddleware = require("../../middlewares/guestMiddleware");
/* const userRegisterMiddleware = require("../../middlewares/userRegisterMiddleware");
const userLoginMiddleware = require("../../middlewares/userLoginMiddleware"); */


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../../public/uploads/users'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname))
    }
  })
  
  const upload = multer({storage: storage});

router.get("/",  userApiController.all); 
router.get("/:id", userApiController.detail);



module.exports = router;