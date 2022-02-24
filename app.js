const express = require("express");
const app = express();
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

app.listen(process.env.PORT || 3000,() => {
    console.log('Servidor corriendo en el puerto 3000');
});