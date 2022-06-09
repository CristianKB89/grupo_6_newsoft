const db = require('../../database/models');

const userApiController = {
    list:
        async (req, res) => {
            try {
                const count = await db.User.count();
                const users = await db.User.findAll({
                    attributes: {
                        exclude: ['password', 'newsletter', 'user_rol', 'created_at', 'updated_at', 'deleted_at'],
                    },

                });
                const data = users.map(user => {
                    return { ...user.dataValues, detail: `/api/users/${user.id_users}` }
                });
                return res.json({
                    meta: {
                        status: 200,
                        count,
                        url: req.originalUrl,
                        
                    },
                    data
                });
            } catch (error) {
                console.log(error);
            }
        },

    detail: async (req, res) => {






    }

}

module.exports = userApiController;