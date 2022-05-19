const { log } = require("console");
const { redirect } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models");


const controlador = {
  productCart: (req, res) => {
    db.Product.findAll()
      .then((product) => {
        res.send(product);
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
