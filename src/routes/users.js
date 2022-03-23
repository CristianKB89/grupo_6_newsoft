const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
}) 
var upload = multer({ storage: storage })

const controlador = require('../controllers/userController.js');

router.get('/register', controlador.registro);
router.post('/register',upload.single('imagen'), controlador.crearUsuario);

router.get('/', controlador.users); 
router.get('/userDetail/:id/', controlador.detalle); 
//router.post('/register-confirmation', controlador.confirmacion_registro);
router.get('/edit/:id', controlador.editar);
router.put('/edit/:id', controlador.editarUsuario);

router.delete('/delete/:id', controlador.borrar); 

router.get('/login', controlador.login);
router.get('/recover', controlador.recover);

module.exports = router;

