const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productController.js');

router.get('/ingresar-producto', controlador.creacion);
router.post('/ingresar-producto', controlador.creacion);
router.get('/editar-producto', controlador.edicion);
router.post('/editar-producto', controlador.edicion);


module.exports = router;