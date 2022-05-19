const db = require("../database/models");


async function usuarioLogueadoMiddleware(req, res, next) {
	res.locals.estaLogueado = false;

	if (req.cookies.EmailUsuario) {
		let emailEnCookie = req.cookies.EmailUsuario;

		let usuarioEnCookie = await db.User.findOne({
			where: {
				email: emailEnCookie,
			}
		}).catch(function (errors) {
			console.log(errors);
		});

		if (usuarioEnCookie) {
			req.session.usuarioLogueado = usuarioEnCookie;
		}
	}

	if (req.session.usuarioLogueado) {
		let usuario = await db.User.findByPk(req.session.usuarioLogueado.id_users)
		res.locals.estaLogueado = true;
		res.locals.usuarioLogueado = usuario;
	}
	next();
}

module.exports = usuarioLogueadoMiddleware;

