const {body} = require('express-validator');
const path = require('path');


const arrayvValidations = [
    body("name")
    .notEmpty().withMessage("Debes completar el campo nombre").bail()
    .isLength({min:5}).withMessage("El nombre del producto debe tener minimo 5 caracteres"), 
    
    body("brand").isLength({min:1}).withMessage("Debes completar el campo marca"), 
    
    body("price").notEmpty().withMessage("Debes completar el campo precio"), 
    
    body("categories").isLength({min:1}).withMessage("Debes seleccionar una categoria"), 
    
    body("color").notEmpty().withMessage("Debes seleccionar un color"), 
    
    body("accesories").notEmpty().withMessage("Debes completar el campo accesorios"), 
    
    body("description")
    .notEmpty().withMessage("Debes completar el campo descripcion").bail()
    .isLength({min:20}).withMessage("La descripcion del producto debe tener minimo 20 caracteres"),  

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


];

module.exports = arrayvValidations;


