const { log } = require("console");
const { redirect } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");

const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const productoCart = productos.filter((producto) => producto.car == "true");

let total = 0;
if (productoCart.length > 0) {
  let preciosString = [];
  for (let i = 0; i < productoCart.length; i++) {
    preciosString.push(productoCart[i].precio);
    var preciosInt = preciosString.map(function (item) {
      return parseInt(item, 10);
    });
  }
  total = preciosInt.reduce(function (a, b) {
    return a + b;
  }, 0);
} else {
  total = 0;
}



const controlador = {
  productCart: (req, res) => {

    res.render(path.resolve(__dirname, "../views/products/productCart.ejs"), {
      producto,
      total,
    });
  },
  informacion: (req, res) => {
    res.render(path.resolve(__dirname, "../views/products/informacion.ejs"));
  },
  pago: (req, res) => {
    res.render(path.resolve(__dirname, "../views/products/pago.ejs"));
  },
  envio: (req, res) => {
    res.render(path.resolve(__dirname, "../views/products/envio.ejs"));
  },
  addProductCart: (req, res) => {
    id = req.body.id;
    const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const productoCar = productos.map((producto) => {
      if (producto.id == id) {
        producto.car = req.body.car;
      }
      return producto;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(productoCar, null, 2));
    let producto = productos.filter((producto) => producto.car == "true");
    res.render(path.resolve(__dirname, "../views/products/productCart.ejs"), {
      producto,
      total,
    });
  },
  deleteProductCart: (req, res) => {
    id = req.body.id;
    const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const productoCar = productos.map((producto) => {
      if (producto.id == id) {
        producto.car = req.body.car;
      }
      return producto;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(productoCar, null, 2));
    let producto = productos.filter((producto) => producto.car == "true");

    res.render(path.resolve(__dirname, "../views/products/productCart.ejs"), {
      producto,
      total,
    });
  },
};
module.exports = controlador;
