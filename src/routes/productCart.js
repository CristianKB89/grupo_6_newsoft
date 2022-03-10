const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productCartController');

router.get('/product-Cart', controlador.productCart);
router.get('/informacion', controlador.informacion);
router.get('/pago', controlador.pago);
router.get('/envio', controlador.envio);


module.exports = router;