const path = require('path');

const controlador = {
    productCart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/productCart.ejs'));
    },
    informacion: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/informacion.ejs'));
    },
    pago: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/pago.ejs'));
    },
    envio: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/envio.ejs'));
    },
}
module.exports= controlador