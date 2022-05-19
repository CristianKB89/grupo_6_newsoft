const db = require("../database/models");

function valoresProductCart(req, res, next) {

    db.Product.findAll()
        .then((product) => {
            let productoCart = product.filter((producto) => producto.car == "true");
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
            req.total = total;
            res.locals.total = total;
            res.locals.productoCart = productoCart;
           //res.send(productoCart);
        })
        .catch((error) => {
            console.log(error);
        });
        
    next();
}

module.exports = valoresProductCart;