const path = require('path');

const controlador = {
    creacion_producto: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/formularioCreacion_Producto.ejs'));
    },
    edicion_producto: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/formularioEdicion_Producto.ejs'));
    },
}

module.exports = controlador;