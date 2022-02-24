const express = require("express");
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
}); 

app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
}); 

app.post('/register-confirmation',(req,res) => {
    res.sendFile(path.join(__dirname, './views/register-confirmation.html'));
}); 

app.listen(port,() => {
    console.log('Servidor corriendo en el puerto '+ port);
});