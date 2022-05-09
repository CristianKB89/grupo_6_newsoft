const { log } = require("console");
const { redirect } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models");

// const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
// const productoCart = productos.filter((producto) => producto.car == "true");

let total = 0;
db.Product.findAll()
  .then((product) => {
    const productoCart = product.filter((producto) => producto.car == "true");
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
  })
  .catch((error) => {
    log(error);
  });

const controlador = {
  productCart: (req, res) => {
    db.Product.findAll()
      .then((product) => {
        res.send(product);
        // res.render(path.resolve(__dirname, "../views/products/productCart.ejs"), {
        //   producto,
        //   total,
        // });
      })
      .catch((error) => {
        log(error);
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
    db.Product.update(
      { car: req.body.car },
      {
        where: {
          id_products: req.body.id,
        },
      }
    )
      .then((producto) => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteProductCart: (req, res) => {
    db.Product.update(
      { car: req.body.car },
      {
        where: {
          id_products: req.body.id,
        },
      }
    )
      .then((producto) => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
module.exports = controlador;
