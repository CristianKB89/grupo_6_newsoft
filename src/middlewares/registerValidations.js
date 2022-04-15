const {body} = require('express-validator');

const arrayvValidations = [
    body("nombre").notEmpty().withMessage("Debes completar el campo nombre"), 
    body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body("password").isLength({min:8}).withMessage("Ingrese una contraseña con minimo ocho caracteres"),

];

module.exports = arrayvValidations;