const {body} = require('express-validator');

const loginValidations = [   
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    
    body("password")
    .notEmpty().withMessage("Debes completar el campo contraseña")

    //Las validaciones der la base de datos se realizan en el controlador
];

module.exports = loginValidations;