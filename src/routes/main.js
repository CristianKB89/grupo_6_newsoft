const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mainController.js');
const invitadoMiddleware = require('../middlewares/invitadoMiddleware');


router.get('/', controlador.index);
router.post('/', controlador.loginProcess);
router.get('/login',invitadoMiddleware, controlador.login);
router.get('/products', controlador.products);


module.exports = router;