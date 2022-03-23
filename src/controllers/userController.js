const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    users: (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		res.render((path.resolve(__dirname, '../views/users/profile.ejs')), { usuarios: usuarios})
	},

    registro: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register.ejs'));
    },

    detalle:(req, res) => {
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
    },

    crearUsuario: (req, res) => {
     
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        const filename = req.file.filename ;

		// capturar los datos del usuario
		const nuevoUsuario = {
			id: usuarios.length == 0 ? 1 : usuarios[usuarios.length -1].id +1,
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			email: req.body.email,
			password: req.body.password,
            image: filename,
            newsletter:req.body.newsletter	
		};
		// guardarlo BD
		usuarios.push(nuevoUsuario)
		// guardar los productos en archivo.json
		fs.writeFileSync( usersFilePath , JSON.stringify(usuarios, null, 2))

		// redireccionar al usuairo /products
		res.redirect('/users')
    },
    
    editar: (req, res) => {
        let idUsuario = req.params.id;
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let usuarioEditar = usuarios.find( users => users.id == idUsuario)

        res.render((path.resolve(__dirname, '../views/users/userEdit.ejs')), {usuarioEditar:usuarioEditar});
       
    },

    editarUsuario:(req, res) => {
       
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        const filename = req.file.filename ;

        let id = req.params.id;
        
        const usuarioEditado = usuarios.map(user =>{
            
            if (user.id == id){
                user.nombre = req.body.nombre;
                user.apellido = req.body.apellido;
                user.email = req.body.email;
                user.password = req.body.password;
                user.image =  filename;
                
            }
            return user;
            })

            fs.writeFileSync( usersFilePath , JSON.stringify(usuarioEditado, null, 2))

            res.redirect('/users')
        
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
    recover: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/recover.ejs'));
    },
}

module.exports = controlador;