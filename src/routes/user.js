const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const userController = require("../controllers_db/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const userRegisterMiddleware = require("../middlewares/userRegisterMiddleware");
const userLoginMiddleware = require("../middlewares/userLoginMiddleware");
/* const user = require("../controllers/user"); */

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/users'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname))
    }
  })
  
  const upload = multer({storage: storage});

router.get("/login", guestMiddleware, userController.login);    
router.get("/register", guestMiddleware, userController.register);  
router.get("/userDetail/:id?", authMiddleware, userController.userDetail);
router.get("/userEdit/:id", authMiddleware, userController.userEdit); 

router.post("/login", userController.access);
router.post("/save",  upload.single("image"), userRegisterMiddleware ,userController.save);
router.put("/edit/:id", upload.single("image"), userController.edit);
router.post("/logout", userController.logout);
router.delete("/delete/:id", userController.delete);

module.exports = router;

/* ----------------------------------------------------------

const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");


router.get("/login",controller.login)
router.get("/register",controller.register)

//router.get("/profile",[???],controller.profile)
//router.get("/logout",[???],controller.logout)

// router.post("/save",[???,???],controller.save)
// router.post("/access",[???,???],controller.access)

// router.put("/update",[???.???],controller.update)
// router.put("/avatar",[???,???],controller.avatar)

module.exports = router */