const db = require('../../database/models');

const userApiController = {

    list: async (req, res) => {
         db.User.findAll({
            attributes: {
                exclude: ['password', 'newsletter', 'user_rol', 'created_at', 'updated_at', 'deleted_at'],
            }
        }).then(users => {
            res.json(users);
        })
            .catch(error => { res.json(error) });
    },



    detail: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await db.User.findByPk(id, {
                attributes: {
                    exclude: ['password', 'newsletter', 'user_rol', 'created_at', 'updated_at', 'deleted_at',]
                }
            });
            const data = { ...user.dataValues, imageUrl: `/img/users/${user.dataValues.image}` };
            return res.json({
                meta: {
                    status: 200,
                    count: 1,
                    url: req.originalUrl
                },
                data
            });
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = userApiController;