const {body} = require("express-validator");

let validaciones = [
    body("first_name").notEmpty().withMessage("Debes completar el campo de Nombre").bail()
    .isLength({min:2}).withMessage("El nombre debe ser más largo"),
    body("last_name").notEmpty().withMessage("Debes completar el campo de Apellido")
    .bail().isLength({min:2}).withMessage("El nombre debe ser más largo"),
    body("user_name").notEmpty().withMessage("Debes completar el campo de Usuario")
    .bail().isLength({min:2}).withMessage("El nombre debe ser más largo"),
    body("password").notEmpty().withMessage("Debes completar la contraseña").bail()
    .isLength({min:8}).withMessage("La contraseña debe ser más larga"),
    /* body("password2").notEmpty().withMessage("Debes completar la contraseña").bail()
    .isLength({min:8}).withMessage("La contraseña debe ser más larga"), */
    body("email").notEmpty().isEmail().withMessage("Debes completar un Email válido")
]

module.exports = validaciones