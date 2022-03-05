const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productController.js');

router.get('/ingresar-producto', controlador.creacion_producto);
router.get('/editar-producto', controlador.edicion_producto);


module.exports = router;