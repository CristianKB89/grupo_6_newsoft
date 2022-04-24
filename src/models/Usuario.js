const fs = require('fs');
const path = require('path');

const User = {
	fileName: path.join(__dirname, '../data/users.json'),

	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8')); //Obtener datos
	},

	findAll: function () {
		return this.getData(); //Buscar entre todos los datos
	},

	findByPk: function (id) {
		let todosLosUsuarios = this.findAll();
		let usuarioEncontrado = todosLosUsuarios.find(unUsuario => unUsuario.id === id); //Buscar por el id
		return usuarioEncontrado;
	},

	findByField: function (field, text) {
		let todosLosUsuarios = this.findAll();
		let usuarioEncontrado = todosLosUsuarios.find(unUsuario => unUsuario[field] === text); //Buscar por una campo
		return usuarioEncontrado;
	},


}

module.exports = User;