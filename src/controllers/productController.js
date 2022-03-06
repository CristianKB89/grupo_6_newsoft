const path = require('path');

const controlador = {
    creacion_producto: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/FormularioCreacion_Producto.ejs'));
    },
    edicion_producto: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/FormularioEdicion_Producto.ejs'));
    },
}

module.exports = controlador;