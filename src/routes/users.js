const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/users')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
}) 
var upload = multer({ storage: storage })

const controlador = require('../controllers/userController.js');

//Listado de usuarios
router.get('/', controlador.users);

//Formulario de creación de usuarios
router.get('/create', controlador.registro);

//Detalle de un usuario particular
router.get('/:id/', controlador.detalle); 

//Acción de creación (a donde se envía el formulario)
router.post('/',upload.single('imagen'), controlador.crearUsuario);

//Formulario de edición de usuario
router.get('/:id/edit', controlador.editar);

//Acción de edición (a donde se envía el formulario):
router.put('/:id',upload.single('imagen'), controlador.editarUsuario);

//Acción de borrado
router.delete('/:id', controlador.borrar); 

router.get('/login', controlador.login);
router.get('/recover', controlador.recover);

module.exports = router;

