const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models");

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
  creacion: async (req, res) => {
    
    let brands = await db.Brand.findAll()
    .catch(function(errors){
      console.log(errors);
  });

    let categories = await db.Category.findAll()
    .catch(function(errors){
      console.log(errors);
  });

    let colors = await db.Color.findAll()
    .catch(function(errors){
      console.log(errors);
  });

      res.render(
        path.resolve(__dirname,"../views/products/formularioCreacionDeProducto.ejs"),
        {brands,colors,categories})

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

    let image;

    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default.jpg";
    }

    
    let nuevoProducto = {
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.prcie,
      categories: req.body.categories,
      color: req.body.color,
      accesories: req.body.accesories,
      image: image,
      description: req.body.description,
      visible: true,
      car: false,
    }

    db.Product.create(nuevoProducto)
    .then(() => {
      res.redirect("/products/productdetail/" + req.params.id);
    })
    .catch(error => console.log(error));

  
  },

  edicion: async (req, res) => {

    let idProduct = req.params.id;

    let productoEditar = await db.Product.findByPk(idProduct, {
        include: [
            {association: 'colors'},
            {association: 'brands'},
            {association: 'categories'},
        ]
    }).catch(function(errors){
        console.log(errors);
    });

    let brands = await db.Brand.findAll()
    .catch(function(errors){
      console.log(errors);
  });

    let categories = await db.Category.findAll()
    .catch(function(errors){
      console.log(errors);
  });

    let colors = await db.Color.findAll()
    .catch(function(errors){
      console.log(errors);
  });

    res.render(
        path.resolve(__dirname,"../views/products/formularioEdicionDeProducto.ejs"),
        {brands,colors,categories,productoEditar})

  },

  editarProducto: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let id = req.params.id;
    let productoEditar = productos.find((products) => products.id == id);

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      let productoCart = productos.filter((producto) => producto.car == "true");

      return res.render(
        (path.resolve(
          __dirname,
          "../views/products/formularioEdicionDeProducto.ejs"
        ),
        { total, productoCart }),
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
      image = productoEditar.image;
    }

    const productoOculto = productos.map((producto) => {
      if (producto.id == id) {
        producto.nombre = req.body.nombre;
        producto.marca = req.body.marca;
        producto.precio = req.body.precio;
        producto.categoria = req.body.categoria;
        producto.color = [req.body.color];
        producto.accesorios = req.body.accesorios;
        producto.image = image;
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
    }
    );
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
            { productoDetalle, brand, category, productoCart, total }
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
        { ocultos, total, productoCart }
      );
    });
  },
};

module.exports = controlador;
