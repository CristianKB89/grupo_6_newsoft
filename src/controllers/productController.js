
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models");
const products_has_colors = db.products_has_colors;
const Op = db.Sequelize.Op;

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
  creacion: async (req, res) => {
    let brands = await db.Brand.findAll().catch(function (errors) {
      console.log(errors);
    });

    let categories = await db.Category.findAll().catch(function (errors) {
      console.log(errors);
    });

    let colors = await db.Color.findAll().catch(function (errors) {
      console.log(errors);
    });

    res.render(
      path.resolve(
        __dirname,
        "../views/products/formularioCreacionDeProducto.ejs"
      ),
      { brands, colors, categories }
    );
  },

  crearProducto: async (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(
        path.resolve(
          __dirname,
          "../views/products/formularioCreacionDeProducto.ejs"
        ),
        {
          errors: resultValidation.mapped(),
          oldData: req.body,
        }
      );
    } else {
      let image;

      if (req.file != undefined) {
        image = req.file.filename;
      } else {
        image = "default.jpg";
      }

      db.Product.create({
        name: req.body.name,
        id_brands: req.body.brand,
        price: req.body.price,
        id_categories: req.body.categories,
        accesories: req.body.accesories,
        image: image,
        description: req.body.description,
        visible: true,
        car: "false",
      })
        .then((result) => {
          if (typeof req.body.color === "string") {
            products_has_colors
              .create({
                id_products: result.id_products,
                id_colors: req.body.color,
              })
              .then((result) => {
                console.log(result);
              })
              .catch((error) => console.log(error));
          } else {
            req.body.color.forEach((color) => {
              products_has_colors
                .create({
                  id_products: result.id_products,
                  id_colors: color,
                })
                .then((result) => {
                  console.log(result);
                })
                .catch((error) => console.log(error));
            });
          }
          //res.send(req.body.color);
        })

        .catch((errors) => {
          console.log(errors);
        });
    }
  },

  edicion: async (req, res) => {
    let idProduct = req.params.id;

    let productoEditar = await db.Product.findByPk(idProduct, {
      include: [
        { association: "colors" },
        { association: "brands" },
        { association: "categories" },
      ],
    }).catch(function (errors) {
      console.log(errors);
    });

    let brands = await db.Brand.findAll().catch(function (errors) {
      console.log(errors);
    });

    let categories = await db.Category.findAll().catch(function (errors) {
      console.log(errors);
    });

    let colors = await db.Color.findAll().catch(function (errors) {
      console.log(errors);
    });

    res.render(
      path.resolve(
        __dirname,
        "../views/products/formularioEdicionDeProducto.ejs"
      ),
      { brands, colors, categories, productoEditar }
    );
  },
  editarProducto: async (req, res) => {
    let idProduct = req.params.id;
    const resultValidation = validationResult(req);
    let productoEditar = await db.Product.findByPk(idProduct, {
      include: [
        { association: "colors" },
        { association: "brands" },
        { association: "categories" },
      ],
    }).catch(function (errors) {
      console.log(errors);
    });
    
    let brands = await db.Brand.findAll().catch(function (errors) {
      console.log(errors);
    });

    let categories = await db.Category.findAll().catch(function (errors) {
      console.log(errors);
    });

    let colors = await db.Color.findAll().catch(function (errors) {
      console.log(errors);
    });

    if (resultValidation.errors.length > 0) {
      return res.render(
        path.resolve(
          __dirname,
          "../views/products/formularioEdicionDeProducto.ejs"
        ),
        {
          errors: resultValidation.mapped(),
          oldData: req.body,
          brands, colors, categories, productoEditar
        }
      );
    } else{
      products_has_colors.destroy({
        where: {
          id_products: idProduct,
        },
      });
      db.Product.update(
        {
          name: req.body.name,
          id_brands: req.body.brand,
          price: req.body.price,
          id_categories: req.body.categories,
          accesories: req.body.accesories,
          description: req.body.description,
        },
        {
          where: {
            id_products: idProduct,
          },
        }
      ).then(() => {
          if (typeof req.body.color === "string") {
            products_has_colors
              .create({
                id_products: idProduct,
                id_colors: req.body.color,
              })
              .then((result) => {
                console.log(result);
              })
              .catch((error) => console.log(error));
          } else {
            //res.send(req.body.color);
            req.body.color.forEach((color) => {
              products_has_colors
                .create({
                  id_products: idProduct,
                  id_colors: color,
                })
  
                .then((result) => {
                  console.log(result);
                })
                .catch((error) => console.log(error));
            });
          }
          res.redirect("/products/productdetail/" + idProduct);
        })
        .catch(function (errors) {
          console.log(errors);
        });
    }
    
  },

  eliminar: (req, res) => {
    let producto_id = req.params.id;
    db.Product.destroy({
      where: {
        id_products: producto_id,
      },
    }).then(() => {
      res.redirect("/products?categoria=catalogo");
    });
  },

  productDetail: (req, res) => {
    let promProduct = db.Product.findByPk(req.params.id, {
      include: ["brands", "categories", "colors"],
    });
    let promBrands = db.Brand.findAll();
    let promCategories = db.Category.findAll();
    let promColors = db.Color.findAll();
    Promise.all([promProduct, promBrands, promCategories, promColors])
      .then(([productoDetalle, Marca, Category]) => {
        if (!productoDetalle) {
          res.redirect("/products?categoria=catalogo");
        } else {
          let brand = Marca.find(
            (brand) => brand.id_brands == productoDetalle.id_brands
          );
          let category = Category.find(
            (category) =>
              category.id_categories == productoDetalle.id_categories
          );
          // res.send(productoDetalle)
          res.render(
            path.resolve(__dirname, "../views/products/productDetail.ejs"),
            { productoDetalle, brand, category }
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  ocultarProducto: (req, res) => {
    db.Product.update(
      {
        visible: false,
      },
      {
        where: {
          id_products: req.params.id,
        },
      }
    )
      .then(() => {
        res.redirect("/products?categoria=catalogo");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mostrarProducto: (req, res) => {
    db.Product.update(
      {
        visible: true,
      },
      {
        where: {
          id_products: req.params.id,
        },
      }
    )
      .then(() => {
        res.redirect("/products?categoria=catalogo");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  productosOcultos: (req, res) => {
    const productos = db.Product.findAll();
    Promise.all([productos]).then(([productos]) => {
      const ocultos = productos.filter((product) => product.visible === false);
      res.render(
        path.resolve(__dirname, "../views/products/productsOcultos.ejs"),
        { ocultos }
      );
    });
  },
  buscador: async (req, res) => {
    let busqueda = req.query.search;
    let producto = await db.Product.findAll({
        where: {
        name: {
          [Op.like]: "%" + busqueda + "%",
        },
      },
    });
    let categoria = "";

    Promise.all([producto]).then(([producto]) => {
      res.render(path.resolve(__dirname, "../views/products/products.ejs"),
        { producto, categoria }
      );
    });
  }
};

module.exports = controlador;