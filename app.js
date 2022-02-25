const express = require("express");
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
}); 

app.get('/productCart',(req,res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
}); 

app.get('/informacion',(req,res) => {
    res.sendFile(path.join(__dirname, './views/informacion.html'));
}); 
app.get('/pago',(req,res) => {
    res.sendFile(path.join(__dirname, './views/pago.html'));
}); 
app.get('/envio',(req,res) => {
    res.sendFile(path.join(__dirname, './views/envio.html'));
});
app.listen(port,() => {
    console.log('Servidor corriendo en el puerto '+ port);
});

 