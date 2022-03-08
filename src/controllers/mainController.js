const path = require('path');

const controlador = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, '../views/index.ejs'));
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/login.ejs'));
    },
    producDetail: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/productDetail.ejs'));
    },
}

module.exports = controlador;