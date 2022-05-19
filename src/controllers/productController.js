const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
  creacion: (req, res) => {
    res.render(
      path.resolve(
        __dirname,
        "../views/products/formularioCreacionDeProducto.ejs"
      )
    );
    console.log("Hola mundo")
  },

  crearProducto: (req, res) => {
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
    }

    const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let image;

    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default.jpg";
    }

    // capturar los datos del producto
    const nuevoProducto = {
      id: productos.length == 0 ? 1 : productos[productos.length - 1].id + 1,
      nombre: req.body.nombre,
      marca: req.body.marca,
      precio: req.body.precio,
      categoria: req.body.categoria,
      color: req.body.color,
      accesorios: req.body.accesorios,
      imagen: image,
      descripcion: req.body.descripcion,
      visible: true,
      car: false,
    };
    // guardarlo BD
    productos.push(nuevoProducto);
    // guardar los productos en archivo.json
    fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2));

    // redireccionar al usuairo /products
    res.redirect("/products/productdetail/" + req.params.id);
  },

  edicion: (req, res) => {
    let idProducto = req.params.id;
    const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const productoEditar = productos.find(
      (products) => products.id == idProducto
    );

    res.render(
      path.resolve(
        __dirname,
        "../views/products/formularioEdicionDeProducto.ejs"
      ),
      { productoEditar: productoEditar }
    );
  },

  editarProducto: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let id = req.params.id;
    let productoEditar = productos.find((products) => products.id == id);

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      
      return res.render(
        path.resolve(
          __dirname,
          "../views/products/formularioEdicionDeProducto.ejs"
        ),
        {
          errors: resultValidation.mapped(),
          oldData: req.body,
          productoEditar: productoEditar,
        }
      );
    }

    let image;

    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = productoEditar.imagen;
    }

    const productoOculto = productos.map((producto) => {
      if (producto.id == id) {
        producto.nombre = req.body.nombre;
        producto.marca = req.body.marca;
        producto.precio = req.body.precio;
        producto.categoria = req.body.categoria;
        producto.color = req.body.color;
        producto.accesorios = req.body.accesorios;
        producto.imagen = image;
        producto.descripcion = req.body.descripcion;
        producto.visible = true;
        producto.car = false;
      }
      return producto;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(productoOculto, null, 2));

    res.redirect("/products/productdetail/" + req.params.id);
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
};

module.exports = controlador;
