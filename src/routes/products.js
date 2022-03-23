const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productController.js');

router.get('/ingresar-producto', controlador.creacion);
router.post('/ingresar-producto', controlador.crearProducto);

router.get('/edit/:id', controlador.edicion);
router.put('/edit/:id', controlador.editarProducto);


module.exports = router;