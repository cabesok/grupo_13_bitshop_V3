const {body} = require("express-validator");

let validaciones = [
    body("user_name").notEmpty().withMessage("Debes completar el campo de Usuario"),
    body("password").notEmpty().withMessage("Debes completar el campo de Email")
]

module.exports = validaciones