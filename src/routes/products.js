const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/products')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
}) 
var upload = multer({ storage: storage })

const controlador = require('../controllers/productController.js');


//Listado de productos: ESTA RUTA ESTA EN MAIN

//Formulario de creación de productos
router.get('/create', controlador.creacion);

//Detalle de un producto particular
router.get('/productdetail/:id', controlador.productDetail);

//Acción de creación (a donde se envía el formulario)
router.post('/',upload.single('imagen'), controlador.crearProducto);

//Formulario de edición de producto
router.get('/:id/edit', controlador.edicion);

//Acción de edición (a donde se envía el formulario):
router.put('/:id',upload.single('imagen'), controlador.editarProducto);

//Acción de borrado
router.delete('/:id',controlador.eliminar);



module.exports = router;