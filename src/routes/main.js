const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mainController.js');

router.get('/', controlador.index);
router.get('/login', controlador.login);
router.get('/productdetail', controlador.producDetail);


module.exports = router;