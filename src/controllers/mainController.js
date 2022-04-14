const { log } = require('console');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const bcryptjs = require('bcryptjs');
const User = require('../models/Usuario');


const controlador = {
    index: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let producto = productos.filter(producto => producto.car == "true");

        res.render(path.resolve(__dirname, '../views/index.ejs'));
    },

    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/index.ejs'));
    },

    loginProcess: (req, res) => {
        let usuarioParaLoguear = User.findByField('email', req.body.email);
		
		if(usuarioParaLoguear) {
			let passwordCorrecto = bcryptjs.compareSync(req.body.password, usuarioParaLoguear.password);
            delete usuarioParaLoguear.password;
            req.session.usuarioLogueado = usuarioParaLoguear;

            if(req.body.remember) {
                res.cookie('EmailUsuario', req.body.email, { maxAge: (1000 * 60) * 60 });
                res.render(path.resolve(__dirname, '../views/index.ejs'));
            }

			else if (passwordCorrecto) {
				return res.redirect('/users/profile');
			} 
			return res.render(path.resolve(__dirname, '../views/index.ejs'), {
				errors: {
					password: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render(path.resolve(__dirname, '../views/index.ejs'), {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
    },
    products: (req, res) => {
        let categoria = req.query.categoria;
        
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            const cases = productos.filter( product => product.categoria === 'Cases');
            const teclado = productos.filter( product => product.categoria === 'Teclados');
            const audifonos = productos.filter( product => product.categoria === 'Audifonos');
            const ratones = productos.filter( product => product.categoria === 'Mouse');
            const camaras = productos.filter( product => product.categoria === 'Camaras');
            const audio = productos.filter( product => product.categoria === 'Audio (Microfonos)');
            const producto = productos.filter( product => product.categoria === categoria);
        res.render(path.resolve(__dirname, '../views/products/products.ejs'), { cases , teclado , audifonos , ratones , camaras , audio , categoria , producto });
    }
}

module.exports = controlador;