const express = require("express");
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));





app.listen(port,() => {
    console.log('Servidor corriendo en el puerto '+ port);
});