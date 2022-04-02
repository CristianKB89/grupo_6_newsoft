const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productCartController');

//Vista de producto en el carrito
router.get('/productCart', controlador.productCart);
//Agregar producto al carrito
router.post('/addProductCart', controlador.addProductCart);
//Elminar producto del carrito
router.post('/deleteProductCart', controlador.deleteProductCart);
router.get('/informacion', controlador.informacion);
router.get('/pago', controlador.pago);
router.get('/envio', controlador.envio);


module.exports = router;