//importaçoes dos modulos
const express = require('express');
const rotasDeProdutos = require("./routes/produtos")
const rotas = require("./routes");
const path = require('path');

const app = express();

//configuracao do template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.static('public'));
app.use(rotasDeProdutos);
app.use(rotas);


app.listen(3000, ()=> console.log("Servidor iniciado!"));

