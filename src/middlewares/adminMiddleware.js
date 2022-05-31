const path = require('path');

function admin (req, res, next) {
	if (req.session.usuarioLogueado && req.session.usuarioLogueado.user_rol == 'admin') {
		return next();
	}

	res.render(path.resolve(__dirname, "../views/index.ejs"))
}

module.exports = admin;