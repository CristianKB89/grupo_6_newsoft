const { log } = require('console');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');


const controlador = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, '../views/index.ejs'));
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/login.ejs'));
    },
    products: (req, res) => {
        let categoria = req.query.categoria;
        
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            const cases = productos.filter( product => product.categoria === 'Cases');
            const teclado = productos.filter( product => product.categoria === 'Teclados');
            const audifonos = productos.filter( product => product.categoria === 'Audifonos');
            const ratones = productos.filter( product => product.categoria === 'Mouse');
            const camaras = productos.filter( product => product.categoria === 'Camaras');
            const audio = productos.filter( product => product.categoria === 'Audio (Microfonos)');
            const producto = productos.filter( product => product.categoria === categoria);
        res.render(path.resolve(__dirname, '../views/products/products.ejs'), { cases , teclado , audifonos , ratones , camaras , audio , categoria , producto });
    }
}

module.exports = controlador;