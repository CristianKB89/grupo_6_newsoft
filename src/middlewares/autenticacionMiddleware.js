function autenticacionMiddleware(req, res, next) {
	if (!req.session.usuarioLogueado) {
		return res.redirect('/users/login');
	}
	next();
}

module.exports = autenticacionMiddleware;

//Si no tengo a nadie en sesion se redigirige al login, se aplico en el perfil de usuario