const {body} = require("express-validator");

let validaciones = [
    body("nombre").notEmpty().withMessage("Debes completar el campo de Nombre").bail()
    .isLength({min:2}).withMessage("El nombre debe ser más largo"),
    body("apellido").notEmpty().withMessage("Debes completar el campo de Apellido")
    .bail().isLength({min:2}).withMessage("El nombre debe ser más largo"),
    body("usuario").notEmpty().withMessage("Debes completar el campo de Usuario")
    .bail().isLength({min:2}).withMessage("El nombre debe ser más largo"),
    body("password").notEmpty().withMessage("Debes completar la contraseña").bail()
    .isLength({min:8}).withMessage("La contraseña debe ser más larga"),
    body("password2").notEmpty().withMessage("Debes completar la contraseña").bail()
    .isLength({min:8}).withMessage("La contraseña debe ser más larga"),
    body("correo").notEmpty().isEmail().withMessage("Debes completar un Email válido")
]

module.exports = validaciones