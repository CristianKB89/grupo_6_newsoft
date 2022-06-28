const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const Op = db.Sequelize.Op; //Nos permite usar operadores de sequelize

const controlador = {
  users: (req, res) => {
    db.User.findAll()
      .then(usuarios => {
        res.render(path.resolve(__dirname, "../views/users/usersList.ejs"), {
          usuarios,
        })
      });
  },

  admin: (req, res) => {
    db.User.findAll()
      .then(usuarios => {
        res.render(path.resolve(__dirname, "../views/users/admin.ejs"), {
          usuarios,
        })
      });
  },

  registro: (req, res) => {
    res.render(path.resolve(__dirname, "../views/users/register.ejs"), {
    });
  },

  crearUsuario: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(
        path.resolve(__dirname, "../views/users/register.ejs"
        ),
        {
          errors: resultValidation.mapped(),
          oldData: req.body
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
                oldData: req.body
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
          newsletter: req.body.newsletter,
          user_phone: req.body.user_phone,
          user_address: req.body.user_address,
          user_rol: "usuario"
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
        res.render(path.resolve(__dirname, "../views/users/userEdit.ejs"), { usuarioEditar: usuarioEditar });
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
    const resultValidation = validationResult(req); //Obtenemos los errores de validación

    if (resultValidation.errors.length > 0) {
      return res.render(
        path.resolve(__dirname, "../views/users/userEdit.ejs"),
        {
          errors: resultValidation.mapped(),
          oldData: req.body,
          usuarioEditar: usuarioLogueado
        }
      );
    }

    // Verificar que el email no sea usado por otro usuario
    let emailInDB = await db.User.findAll({
      where: {
        email: req.body.email,  
        id_users: { [Op.not]: userId } // Excluye el usuario que está editando
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
      user_phone: req.body.user_phone,
      user_address: req.body.user_address,
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
    db.User.findAll()
      .then((users) => {
        usuario = users.find((user) => user.id_users == req.session.usuarioLogueado.id_users);
        if (usuario) {
          res.render(path.resolve(__dirname, "../views/users/userProfile.ejs"), {
            usuario
          });
        }
        else {
          res.redirect("/");
        }
      }
      ).catch((err) => {
        console.log(err);
      }
      );
  },

  desconexion: (req, res) => {
    res.clearCookie("EmailUsuario");
    req.session.destroy();
    return res.redirect("/");
  },

  recover: (req, res) => {
    res.render(path.resolve(__dirname, "../views/users/recover.ejs"), {});
  },
};

module.exports = controlador;
