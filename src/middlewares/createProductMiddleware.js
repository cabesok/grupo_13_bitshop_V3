const {body} = require("express-validator");

let validaciones = [
    body("name").notEmpty().withMessage("Debes completar el campo de Nombre del Producto").bail()
    .isLength({min:2}).withMessage("El nombre debe ser más largo"),
    body("description").notEmpty().withMessage("Debes completar el campo de Descripción del Producto")
    .bail().isLength({min:2}),
    body("price").notEmpty().withMessage("Debes completar el campo de Precio del Producto"),
    body("image").notEmpty()/* .withMessage("Debes cargar una imagen") */,
    body("category").notEmpty()
]

module.exports = validaciones