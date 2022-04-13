function invitadoMiddleware(req, res, next) {
	if (req.session.usuarioLogueado) {
		return res.redirect('/users/profile');
	}
	next();
}

module.exports = invitadoMiddleware;

//Si hay un usuario en session lo redirige a su perfil cuando entra a la ruta del registro y login que es donde se aplico el middelware