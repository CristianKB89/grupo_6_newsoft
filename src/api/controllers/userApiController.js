const db = require("../../database/models");

const userApiController = {
  list: async (req, res) => {
    try {
      const users = await db.User.findAll({
        attributes: {
          exclude: [
            "password",
            "newsletter",
            "user_rol",
            "created_at",
            "updated_at",
            "deleted_at",
          ],
        },
        order: [["name", "ASC"]],
        limit: 10,
      });
      const count = await db.User.count();
      const data = users.map((user) => {
        return {
          ...user.dataValues,
          detail: `/api/users/${user.dataValues.id_users}`,
        };
      });
      return res.json({
        meta: {
          status: 200,
          count,
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
      const user = await db.User.findByPk(id, {
        attributes: {
          exclude: [
            "password",
            "newsletter",
            "user_rol",
            "created_at",
            "updated_at",
            "deleted_at",
          ],
        },
      });
      const data = {
        ...user.dataValues,
        imageUrl: `/img/users/${user.dataValues.image}`,
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
  
  listado: async (req, res) => {
    const users = await db.User.findAll({
      attributes: { },
    })
      .then((products) => {
        res.json(products);
      })
      .then(() => {})
      .catch((error) => {
        res.json(error);
      });
  },
};

module.exports = userApiController;
