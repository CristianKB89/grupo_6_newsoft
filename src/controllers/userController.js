const path = require('path');

const controlador = {
    registro: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register.ejs'));
    },
    confirmacion_registro: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register-confirmation.ejs'));
    },
}

module.exports = controlador;