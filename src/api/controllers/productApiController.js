const db = require("../../database/models");

const productApiController = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: ["brands", "categories", "colors"],
        attributes: {
          exclude: [
            "price",
            "created_at",
            "updated_at",
            "deleted_at",
            "image",
            "accesories",
            "car",
            "visible",
            "id_brands",
            "id_categories",
            "id_colors",
          ],
        },
      });
      const count = await db.Product.count();
      const countByCategory = await db.Product.count({
        include: [{ association: "categories" }],
        group: ["categories.categories"],
      });
      const data = products.map((product) => {
        return {
          ...product.dataValues,
          detail: `/api/products/${product.dataValues.id_products}`,
        };
      });
      return res.json({
        meta: {
          status: 200,
          count,
          countByCategory
        },
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  detail: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await db.Product.findByPk(id, {
        include: ["brands", "categories", "colors"],
        attributes: {
          exclude: ["created_at", "updated_at", "deleted_at", "car", "visible"],
        },
      });
      const data = {
        ...product.dataValues,
        imageUrl: `/img/products/${product.dataValues.image}`,
      };
      return res.json({
        meta: {
          status: 200,
        },
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  listadoProductos: async (req, res) => {
    const products = await db.Product.findAll({
      include: [{ association: "categories"}],
          attributes: { }
    }).then(products => {
      const data = products.map((product) => {
        return {
          ...product.dataValues,
          imageUrl: `${process.env.URL_BACKEND}/img/products/${product.image}`,
        };
      });
      res.json(data);
    }).then(() => {})
    .catch(error => {res.json(error)});
  },

  listadoCategorias: async (req, res) => {
    const categorias = await db.Category.findAll({
         attributes: {}
    }).then(categories => {
      res.json(categories);
    }).then(() => {})
    .catch(error => {res.json(error)});
  }

};

module.exports = productApiController;
