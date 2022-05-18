const express = require('express');
const router = express.Router();
const path = require('path');
const arrayvValidations = require('../middlewares/registerValidations');
const invitadoMiddleware = require('../middlewares/invitadoMiddleware');
const autenticacionMiddleware = require('../middlewares/autenticacionMiddleware');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/img/users'))
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
router.get('/create',invitadoMiddleware, controlador.registro);

//Acción de creación (a donde se envía el formulario)
router.post('/',upload.single('image'),arrayvValidations,controlador.crearUsuario);

//Formulario de edición de usuario
router.get('/:id/edit', controlador.editar);

//Acción de edición (a donde se envía el formulario):
router.put('/:id',upload.single('image'),arrayvValidations, controlador.editarUsuario);

//Acción de borrado
router.post('/:id', controlador.borrar); 

//Perfil, detalles de usuario
router.get('/profile/',autenticacionMiddleware, controlador.perfil);

// Logout
router.get('/logout/', controlador.desconexion);

router.get('/recover', controlador.recover);

module.exports = router;

