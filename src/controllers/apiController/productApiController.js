const db = require("../../database/models");

const productApiController = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: [{ association: "categories"}],
        attributes: {
          exclude: ["price", "created_at", "updated_at", "deleted_at", "image", "accesories", "car", "visible","id_brands", "id_categories"],
        }
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
          url: req.originalUrl,
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
      const product = await db.Product.findByPk(id, 
        { include: ["brands", "categories", "colors"],
        attributes: {
          exclude : ["created_at", "updated_at", "deleted_at", "car", "visible"],
        },
      });
      const data = {
        ...product.dataValues,
        imageUrl: `/img/products/${product.dataValues.image}`,
      };
      return res.json({
        meta: {
          status: 200,
          count: 1,
          url: req.originalUrl,
        },
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productApiController;
