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
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/recover', (req,res)=>{
    res.sendFile(__dirname + '/views/recover.html');
});
app.listen(process.env.PORT || 3030,() => {
    console.log('Servidor corriendo en el puerto 3030');
});

 
