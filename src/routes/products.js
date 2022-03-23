const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productController.js');

router.get('/create', controlador.creacion);
router.post('/', controlador.crearProducto);

router.get('/:id/edit', controlador.edicion);
router.put('/:id', controlador.editarProducto);

//router.get('/:id', controlador.xx);

//router.delete('/:id',controlador.delete))




module.exports = router;