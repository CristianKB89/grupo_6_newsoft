const db = require("../../database/models");

const productApiController = {
  list: async (req, res) => {
    db.Product.findAll({
      include: [{ association: "categories"}],
          attributes: {
          exclude: ["created_at", "updated_at", "deleted_at", "image","car", "visible","id_brands", "id_categories"],
        }
    }).then(products => {
      res.json(products);
    })
    .catch(error => {res.json(error)});
  },

  detail: async (req, res) => {

  },
};

module.exports = productApiController;
