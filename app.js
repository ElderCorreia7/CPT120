// Importar módulo express
const express = require('express');

// Importar módulo mysql
const mysql = require('mysql2');

// App
const app = express();

// Confuguração de conexão
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'projeto'
});

// Teste de conexão
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
});

// Rota do servidor
app.get('/', function(req, res){
    res.end('Salvee!');
});

// Servidor
app.listen(8080);