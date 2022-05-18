const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
// const usersFilePath = path.join(__dirname, "../data/users.json");
// const User = require("../models/Usuario");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models");
const Op = db.Sequelize.Op;

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
  users: (req, res) => {
    db.User.findAll()
      .then(usuarios => {
        res.render(path.resolve(__dirname, "../views/users/usersList.ejs"), {
          usuarios,
          productoCart,
          total,
        })
      });
  },

  registro: (req, res) => {
    res.render(path.resolve(__dirname, "../views/users/register.ejs"), {
      productoCart,
      total,
    });
  },

  crearUsuario: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(
        path.resolve(__dirname, "../views/users/register.ejs"),
        {
          errors: resultValidation.mapped(),
          oldData: req.body,
          productoCart, total
        }
      );
    }

    db.User.findAll()
      .then(users => {

        let usuarioEnBD = users.find((user) => user.email == req.body.email);

        if (usuarioEnBD) {
          return res.render
            (path.resolve(__dirname, "../views/users/register.ejs"),

              {
                errors: {
                  //No se despliega el mensaje de error en formulario
                  email: {
                    msg: "Este email ya está registrado",
                  },
                },
                oldData: req.body,
                productoCart, total
              }
            );
        }

        let image;

        if (req.file != undefined) {
          image = req.file.filename;
        } else {
          image = "default.png";
        }

        let user = {
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          image: image,
          newsletter: req.body.newsletter
        }

        if (req.body.newsletter != null) {
          user.newsletter = req.body.newsletter;
        } else {
          user.newsletter = "off";
        }

        db.User.create(user)
          .then((storedUser) => {
            return res.redirect('/');
          })
          .catch(error => console.log(error));
      }).catch(error => {
        console.log(error)
      })

  },

  editar: (req, res) => {
    db.User.findByPk(req.params.id)
      .then(function (usuarioEditar) {
        res.render(path.resolve(__dirname, "../views/users/userEdit.ejs"), { usuarioEditar: usuarioEditar, productoCart, total });
      })
      .catch(error => {
        console.log(error)
      })

  },

  editarUsuario: async (req, res) => {

    // Búsqueda del usuario
    let usuarioLogueado = await db.User.findByPk(req.session.usuarioLogueado.id_users)
      .catch(function (errors) {
        console.log(errors);
      });

    let userId = usuarioLogueado.id_users;

    // Verificación de errores
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(
        (path.resolve(__dirname, "../views/users/userEdit.ejs")),
        {
          errors: resultValidation.mapped(),
          oldData: req.body,
          productoCart, total,
          usuarioEditar: usuarioLogueado
        }
      );
    }

    // Verificar que el email no sea usado por otro usuario
    let emailInDB = await db.User.findAll({
      where: {
        email: req.body.email,
        id_users: { [Op.not]: userId }
      }
    }).catch(function (errors) {
      console.log(errors);
    });

    if (emailInDB.length > 0) {
      return res.render(
        (path.resolve(__dirname, "../views/users/userEdit.ejs")), {
        errors: {
          email: {
            msg: 'Este email ya está en uso',
          }
        },
        oldData: req.body,
        productoCart, total,
        usuarioEditar: usuarioLogueado
      });
    }

    let image;
    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = usuarioLogueado.image;
    }

    let password;
    if (req.body.password == usuarioLogueado.password) {
      password = usuarioLogueado.password;
    } else {
      password = bcryptjs.hashSync(req.body.password, 10);
    }

    await db.User.update({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: password,
      image: image,
    },
    {
      where: { id_users: userId }
    })
    .then(() => {
      res.redirect('profile');
    })
    .catch(error => {
    console.log(error)
      })
  },

  borrar: (req, res) => {
    let id = req.params.id;
    db.User.destroy({
      where: {
        id_users: id,
      },
    }).then(() => {
      res.clearCookie("EmailUsuario");
      req.session.destroy();
      res.redirect("/");
    }).catch(error => {
      console.log(error)
    })

  },

  perfil: (req, res) => {
    db.User.findByPk(req.session.usuarioLogueado.id_users)
      .then((usuario) => {
        return res.render(path.resolve(__dirname, '../views/users/userProfile.ejs'), {
          usuario,
          productoCart,
          total,
        });
      })
      .catch((error) => console.log(error));

  },

  desconexion: (req, res) => {
    res.clearCookie("EmailUsuario");
    req.session.destroy();
    return res.redirect("/");
  },

  recover: (req, res) => {
    res.render(path.resolve(__dirname, "../views/users/recover.ejs"), {
      productoCart, total
    });
  },
};

module.exports = controlador;
