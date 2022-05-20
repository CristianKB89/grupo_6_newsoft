const db = require("../database/models");
const Op = db.Sequelize.Op;

function valoresProductCart(req, res, next) {

    db.Product.findAll(
        {
            where: {
                car: "true"
            }
        }
    )
    .then((product) => {
            let numCarrito = product.length;
            res.locals.productoCart = product;
            let total = 0;
            product.forEach(i => {
                total += i.price;
            });
            res.locals.total = total;
            res.locals.numCarrito = numCarrito;
        }).catch((error) => {
            console.log(error);
        });
        
    next();
}

module.exports = valoresProductCart;