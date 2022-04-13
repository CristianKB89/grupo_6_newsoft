const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const User = require('../models/Usuario');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    users: (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		res.render((path.resolve(__dirname, '../views/users/usersList.ejs')), { usuarios: usuarios})
	},

    registro: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register.ejs'));
    },

    /*detalle:(req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		// capturar el id que el usuario quiere ver
		let idUsuario = req.params.id
		// buscar el usuario
		let usuarioBuscado = usuarios.find( user => user.id == idUsuario )

		if (!usuarioBuscado) {
			res.redirect('/users')
		}

		// renderizar la vista detail -> usuarioBuscado
		res.render((path.resolve(__dirname, '../views/users/userDetail.ejs')), {usuarioBuscado})
    },*/

    crearUsuario: (req, res) => {

        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render((path.resolve(__dirname, '../views/users/register.ejs')), {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        let usuarioEnBD = User.findByField('email', req.body.email);

		if (usuarioEnBD) {
			return res.render((path.resolve(__dirname, '../views/users/register.ejs')),{
				errors: { //No se despliega el mensaje de error en formulario
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
     
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let image

		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = 'default.png'
		}

		// capturar los datos del usuario
		const nuevoUsuario = {
			id: usuarios.length == 0 ? 1 : usuarios[usuarios.length -1].id +1,
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),
            image: image,
            newsletter:req.body.newsletter	
		};

        if(req.body.newsletter!=null){
            nuevoUsuario.newsletter = req.body.newsletter	
            
        }else{
            nuevoUsuario.newsletter = "off";
        }

		// guardarlo BD
		usuarios.push(nuevoUsuario)
		// guardar los productos en archivo.json
		fs.writeFileSync( usersFilePath , JSON.stringify(usuarios, null, 2))

		// redireccionar al usuairo /products
		res.redirect('/users/')
    },
    
    editar: (req, res) => {
        let idUsuario = req.params.id;
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let usuarioEditar = usuarios.find( users => users.id == idUsuario);

        res.render((path.resolve(__dirname, '../views/users/userEdit.ejs')), {usuarioEditar:usuarioEditar});
       
    },

    editarUsuario:(req, res) => {

        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let id = req.params.id;
        let usuarioEditar = usuarios.find( users => users.id == id);

        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render((path.resolve(__dirname, '../views/users/userEdit.ejs')), {
				errors: resultValidation.mapped(),
				oldData: req.body,
                usuarioEditar:usuarioEditar
			});
		}
       
        let image
	
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = usuarioEditar.image
		}
        
        const usuarioEditado = usuarios.map(user =>{
            
            if (user.id == id){
                user.nombre = req.body.nombre;
                user.apellido = req.body.apellido;
                user.email = req.body.email;
                user.password = bcryptjs.hashSync(req.body.password, 10),
                user.image =  image;
                
            }
            return user;
            })

            fs.writeFileSync( usersFilePath , JSON.stringify(usuarioEditado, null, 2))

            res.redirect('/users/'+ req.params.id)
        
    },

    borrar : (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let idUsuario = req.params.id
		
		let usuarioFiltrado = usuarios.filter( users => users.id != idUsuario)

		fs.writeFileSync( usersFilePath , JSON.stringify(usuarioFiltrado, null, 2))

        res.redirect('/users')


	},


    
    
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/login.ejs'));
    },

    ProcesoLogin: (req, res) => {
		let usuarioParaLoguear = User.findByField('email', req.body.email);
		
		if(usuarioParaLoguear) {
			let passwordCorrecto = bcryptjs.compareSync(req.body.password, usuarioParaLoguear.password);
            delete usuarioParaLoguear.password;
            req.session.usuarioLogueado = usuarioParaLoguear;

            if(req.body.remember) {
                res.cookie('EmailUsuario', req.body.email, { maxAge: (1000 * 60) * 60 })
            }

			if (passwordCorrecto) {
				return res.redirect('/users/profile');
			} 
			return res.render(path.resolve(__dirname, '../views/users/login.ejs'), {
				errors: {
					password: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render(path.resolve(__dirname, '../views/users/login.ejs'), {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},

    perfil: (req, res) => {
		return res.render(path.resolve(__dirname, '../views/users/userProfile.ejs'),{
        usuario: req.session.usuarioLogueado
		});
    },

    desconexion: (req, res) => {
		res.clearCookie('EmailUsuario');
		req.session.destroy();
		return res.redirect('/');
	},

    recover: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/recover.ejs'));
    },
}

module.exports = controlador;