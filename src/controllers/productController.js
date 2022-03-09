const path = require('path');

const controlador = {
    creacion_producto: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/formularioCreacionDeProducto.ejs'));
    },
    edicion_producto: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/formularioEdicionDeProducto.ejs'));
    },
}

module.exports = controlador;