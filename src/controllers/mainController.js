const { log } = require("console");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const bcryptjs = require("bcryptjs");
const User = require("../models/Usuario");
const db = require("../database/models");

const Product = db.Product;

const controlador = {
  index: (req, res) => {
    Product.findAll()
      .then((product) => {
        res.render(path.resolve(__dirname, "../views/index.ejs"), {});
      })
      .catch((error) => {
        console.log(error);
      });
      
  },

  login: (req, res) => {
    Product.findAll()
      .then((product) => {
        res.render(path.resolve(__dirname, "../views/index.ejs"), {});
      })
      .catch((error) => {
        console.log(error);
      });
  },

  loginProcess: (req, res) => {
    let promUsers = db.User.findAll();
    let promProduct = Product.findAll();
    Promise.all([promUsers, promProduct])
      .then(([users, products]) => {
        let user = users.find((user) => user.email == req.body.email);

        if (user) {
          let passwordCorrecto = bcryptjs.compareSync(
            req.body.password,
            user.password
          );
          if (passwordCorrecto) {
            delete user.password;
            req.session.usuarioLogueado = user;

            if (req.body.remember) {
              res.cookie("EmailUsuario", req.body.email, {
                maxAge: 1000 * 60 * 60,
              });
            }
            return res.redirect("/users/profile"), {};
          } else {
            return res.render(path.resolve(__dirname, "../views/index.ejs"), {
              errors: {
                password: {
                  msg: "Las credenciales son inválidas",
                },
              },
            });
          }
        }

        return res.render(path.resolve(__dirname, "../views/index.ejs"), {
          errors: {
            email: {
              msg: "No se encuentra este email en nuestra base de datos",
            },
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  products: (req, res) => {
    let categoria = req.query.categoria;
    let promProduct = Product.findAll({
      include: ["brands", "categories", "colors"],
    });
    let promBrands = db.Brand.findAll();
    let promCategories = db.Category.findAll();
    let promColors = db.Color.findAll();
    Promise.all([promProduct, promBrands, promCategories, promColors])
      .then(([productoDetalle, Marca, Category]) => {
        const cases = productoDetalle.filter(
          (producto) => producto.id_categories == 1
        );
        const teclado = productoDetalle.filter(
          (producto) => producto.id_categories == 2
        );
        const audifonos = productoDetalle.filter(
          (producto) => producto.id_categories == 3
        );
        const ratones = productoDetalle.filter(
          (producto) => producto.id_categories == 4
        );
        const camaras = productoDetalle.filter(
          (producto) => producto.id_categories == 5
        );
        const audio = productoDetalle.filter(
          (producto) => producto.id_categories == 6
        );
        const producto = productoDetalle.filter(
          (producto) => producto.categories.categories == categoria
        );
        res.render(path.resolve(__dirname, "../views/products/products.ejs"), {
          cases,
          teclado,
          audifonos,
          ratones,
          camaras,
          audio,
          categoria,
          producto,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = controlador;
