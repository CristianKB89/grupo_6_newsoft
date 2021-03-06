const express = require('express');
const router = express.Router();
const path = require('path');
const arrayvValidations = require('../middlewares/productFormValidator');
const adminMiddleware = require('../middlewares/adminMiddleware');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/img/products'))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
  }
}) 
var upload = multer({ storage: storage })

const controlador = require('../controllers/productController.js');


//Listado de productos: ESTA RUTA ESTA EN MAIN

//Formulario de creación de productos
router.get('/create',adminMiddleware, controlador.creacion);

//Detalle de un producto particular
router.get('/productdetail/:id', controlador.productDetail);

//Acción de creación (a donde se envía el formulario)
router.post('/crear',upload.single('image'),arrayvValidations, controlador.crearProducto);

//Formulario de edición de producto
router.get('/:id/edit',adminMiddleware, controlador.edicion);

//Acción de edición (a donde se envía el formulario):
router.put('/:id',upload.single('image'),arrayvValidations, controlador.editarProducto);

//Acción de borrado
router.delete('/:id',controlador.eliminar);

//Acción de ocultar producto
router.put('/:id/ocultar',controlador.ocultarProducto);

//Acción de mostrar producto
router.put('/:id/mostrar',controlador.mostrarProducto);

//Vista de productos ocultos
router.get('/ocultos',adminMiddleware, controlador.productosOcultos);

//Buscador de productos
router.get('/search', controlador.buscador);


module.exports = router;