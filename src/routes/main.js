const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mainController.js');

router.get('/', controlador.index);
router.get('/login', controlador.login);


module.exports = router;