const path = require('path');

const controlador = {
    creacion: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/formularioCreacionDeProducto.ejs'));
    },
    edicion: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/formularioEdicionDeProducto.ejs'));
    },
}

module.exports = controlador;