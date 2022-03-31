const {body} = require('express-validator');

const arrayvValidations = [
    body("nombre").notEmpty().withMessage("Debes completar el campo nombre"), 
    body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("email").isEmail().withMessage("Debes ingresar un email valido"),
    body("password").isLength({min:8}).withMessage("Ingrese una contraseña con minimo ocho caracteres"),

];

module.exports = arrayvValidations;