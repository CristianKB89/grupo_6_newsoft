const {body} = require('express-validator');


const arrayvValidations = [
    body("name").notEmpty().withMessage("Debes completar el campo nombre"), 
    body("brand").isLength({min:1}).withMessage("Debes completar el campo marca"), 
    body("price").notEmpty().withMessage("Debes completar el campo precio"), 
    body("categories").isLength({min:1}).withMessage("Debes seleccionar una categoria"), 
    body("color").notEmpty().withMessage("Debes seleccionar un color"), 
    body("accesories").notEmpty().withMessage("Debes completar el campo accesorios"), 
    body("description").notEmpty().withMessage("Debes completar el campo descripcion"), 


];

module.exports = arrayvValidations;


