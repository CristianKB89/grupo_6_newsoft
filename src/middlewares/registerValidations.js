const {body} = require('express-validator');
const path = require('path');


const arrayvValidations = [
    body("name")
    .notEmpty().withMessage("Debes completar el campo nombre").bail()
    .isLength({min:2}).withMessage("El nombre debe tener almenos dos caracteres"),
    
    body("lastname").notEmpty().withMessage("Debes completar el campo apellido"),
    
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),

    body('user_phone')
    .notEmpty().withMessage('Tienes que escribir un teléfono'),

    body('user_address')
    .notEmpty().withMessage('Tienes que escribir una dirección'),
 
    
    body("password")
    .notEmpty().withMessage("Debes completar el campo contraseña").bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
		minSymbols: 1
    })
    .withMessage('Minimo 8 caracteres, 1 mayuscula, 1 numero y 1 caracter'),

    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg','.png', ".jpeg",'.gif'];

		if (!file) {

		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})

        //Las validaciones der la base de datos se realizan en el controlador

];

module.exports = arrayvValidations;