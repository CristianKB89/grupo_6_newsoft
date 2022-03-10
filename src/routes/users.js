const express = require('express');
const router = express.Router();
const controlador = require('../controllers/userController.js');

router.get('/register', controlador.registro);
router.post('/register-confirmation', controlador.confirmacion_registro);

router.get('/login', controlador.login);
router.get('/recover', controlador.recover);

module.exports = router;

