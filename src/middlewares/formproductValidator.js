const {body} = require('express-validator');
const controlador = require('../controllers/userController');

const arrayvValidations = [
    body("nombre").notEmpty().withMessage("Debes completar el campo nombre"), 
    body("marca").isLength({min:1}).withMessage("Debes completar el campo marca"), 
    body("precio").notEmpty().withMessage("Debes completar el campo precio"), 
    body("categoria").isLength({min:1}).withMessage("Debes seleccionar una categoria"), 
    body("color").isLength({min:1}).withMessage("Debes seleccionar un color"), 
    body("accesorios").notEmpty().withMessage("Debes completar el campo accesorios"), 
    body("descripcion").notEmpty().withMessage("Debes completar el campo descripcion"), 


];

module.exports = arrayvValidations;


