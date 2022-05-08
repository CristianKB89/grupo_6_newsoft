const { log } = require("console");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const bcryptjs = require("bcryptjs");
const User = require("../models/Usuario");
const db = require("../database/models");

// const productos = db.Product.findAll();

// Promise.all([productos]).then(([productos]) => {
//   const productoCart = productos.filter((producto) => producto.car == "true");
//   if (productoCart.length > 0) {
//     let preciosString = [];
//     for (let i = 0; i < productoCart.length; i++) {
//       preciosString.push(productoCart[i].precio);
//       var preciosInt = preciosString.map(function (item) {
//         return parseInt(item, 10);
//       });
//     }
//     return total = preciosInt.reduce(function (a, b) {
//       return a + b;
//     }, 0);
//   } else {
//     return total = 0;
//   }
//   console.log(total);
// });

// let total = 0;
// if (productoCart.length > 0) {
//   let preciosString = [];
//   for (let i = 0; i < productoCart.length; i++) {
//     preciosString.push(productoCart[i].precio);
//     var preciosInt = preciosString.map(function (item) {
//       return parseInt(item, 10);
//     });
//   }
//   total = preciosInt.reduce(function (a, b) {
//     return a + b;
//   }, 0);
// } else {
//   total = 0;
// }

const controlador = {
  index: (req, res) => {
    db.Product.findAll()
      .then((product) => {
        const productoCart = product.filter(
          (producto) => producto.car == "true"
        );
        let total = 0;
        // res.send(producto);
        res.render(path.resolve(__dirname, "../views/index.ejs"), {
          productoCart,
          total,
        });
      })
      .catch((error) => {
        log(error);
      });
  },

  login: (req, res) => {
    db.Product.findAll()
      .then((product) => {
        const productoCart = product.filter(
          (producto) => producto.car == "true"
        );
        let total = 0;
        res.render(path.resolve(__dirname, "../views/index.ejs"), {
          productoCart,
          total,
        });
      })
      .catch((error) => {
        log(error);
      });
  },

  loginProcess: (req, res) => {
    let promUsers = db.User.findAll();
    let promProduct = db.Product.findAll();
    Promise.all([promUsers, promProduct])
      .then(([users, products]) => {
        //Productos del carrito
        const productoCart = products.filter(
          (producto) => producto.car == "true"
        );
        let total = 0;
        //Usuario que se loguea
        let user = users.find((user) => user.email == req.body.email);

        if (user) {
          let passwordCorrecto = bcryptjs.compareSync(req.body.password, user.password)
            if (passwordCorrecto) {
              delete user.password;
              req.session.usuarioLogueado = user;
              if (req.body.remember) {
                res.cookie("EmailUsuario", req.body.email, {
                  maxAge: 1000 * 60 * 60,
                });
              }
              return res.redirect("/users/profile"), { productoCart, total };
            } else {
              return res.render(path.resolve(__dirname, "../views/index.ejs"), {
                errors: {
                  password: {
                    msg: "Las credenciales son inválidas",
                  },
                },
                productoCart,
                total,
              });
            }
          };
    
        return res.render(path.resolve(__dirname, "../views/index.ejs"), {
          errors: {
            email: {
              msg: "No se encuentra este email en nuestra base de datos",
            },
          },
          productoCart,
          total,
        });
      })
      .catch((error) => {
        log(error);
      });
  },
  products: (req, res) => {
    let categoria = req.query.categoria;
    let promProduct = db.Product.findAll({
      include: ["brands", "categories", "colors"],
    });
    let promBrands = db.Brand.findAll();
    let promCategories = db.Category.findAll();
    let promColors = db.Color.findAll();
    Promise.all([promProduct, promBrands, promCategories, promColors])
      .then(([productoDetalle, Marca, Category]) => {
        const productoCart = productoDetalle.filter(
          (producto) => producto.car == "true"
        );
        let total = 0;
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
          productoCart,
          total,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = controlador;
