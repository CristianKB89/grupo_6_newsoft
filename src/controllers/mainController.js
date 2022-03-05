const path = require('path');

const controlador = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, '../views/index.ejs'));
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/login.ejs'));
    },
}

module.exports = controlador;