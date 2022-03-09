const path = require('path');
const { Recoverable } = require('repl');

const controlador = {
    registro: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register.ejs'));
    },
    confirmacion_registro: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register-confirmation.ejs'));
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/login.ejs'));
    },
    recover: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/recover.ejs'));
}

module.exports = controlador;