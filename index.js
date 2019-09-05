const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");


//iniciando o app
const app = express();

//iniciando a conexao com DB
mongoose.connect("mongodb://localhost:27017/hunt", { useNewUrlParser: true })
requireDir("./src/models");

const Product = mongoose.model('Product');

//criando a primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React',
        description: 'Teste',
        url: 'www.google.com'
    });

    return res.send("Olá mundo");
});

//iniciando o servidor
app.listen(3001, () => {
    console.log("servidor ouvindo...");
});