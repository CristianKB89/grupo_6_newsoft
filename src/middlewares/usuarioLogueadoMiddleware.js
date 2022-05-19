const db = require("../database/models");
const User = require('../models/Usuario');

function usuarioLogueadoMiddleware(req, res, next) {
	res.locals.estaLogueado = false;

	let emailEnCookie = req.cookies.EmailUsuario;
	let usuarioEncookie = User.findByField('email', emailEnCookie);

	if (usuarioEncookie) {
		req.session.usuarioLogueado = usuarioEncookie;
	}  

	if (req.session.usuarioLogueado) {
		res.locals.estaLogueado = true;
		res.locals.usuarioLogueado = req.session.usuarioLogueado;
	}

	next();
}

module.exports = usuarioLogueadoMiddleware;