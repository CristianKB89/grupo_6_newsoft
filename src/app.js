const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser');
const app = express();
const rutas = require('./routes/main.js');
const rutas_usuarios = require('./routes/users.js');
const rutas_productos = require('./routes/products.js');
const rutas_productcart= require('./routes/productCart')

// Routes API
const userApiRoutes = require('./routes/apiRoutes/userApiRouter.js');


const path = require('path');

const usuarioLogueadoMiddleware = require('./middlewares/usuarioLogueadoMiddleware');
const valoresProductCart = require('./middlewares/productCartMiddlewares');

app.use(session({
	secret: "Shhh, Es un secreto!!!",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(usuarioLogueadoMiddleware);
app.use(valoresProductCart);

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set("views engine", "ejs");

app.use('/', rutas);
app.use('/users', rutas_usuarios);
app.use('/products', rutas_productos);
app.use('/productCart', rutas_productcart);


app.use(userApiRoutes);

app.listen(process.env.PORT || 3030,() => {
    console.log('Servidor corriendo en el puerto 3030');
});