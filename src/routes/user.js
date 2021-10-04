const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
/* const userRegisterMiddleware = require("../middlewares/userRegisterMiddleware")
const userLoginMiddleware = require("../middlewares/userLoginMiddleware") */

router.get("/login", user.login);
router.get("/register", user.register);

/* router.post("/access", userLoginMiddleware ,controller.access);
router.post("/save", userRegisterMiddleware ,controller.save); */

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