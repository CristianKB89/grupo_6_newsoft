const express = require("express");
const app = express();
const rutas = require('./routes/main.js');
const rutas_usuarios = require('./routes/users.js');
const rutas_productos = require('./routes/products.js');
const path = require('path');

app.use(express.static('public'));
app.set("views engine", "ejs");
app.use('/', rutas);
app.use('/users', rutas_usuarios);
app.use('/product', rutas_productos);


app.listen(process.env.PORT || 3030,() => {
    console.log('Servidor corriendo en el puerto 3030');
});

 
