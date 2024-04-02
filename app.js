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
    database:'CPT120'
});


// Teste de conexão
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
});

// Rota do servidor
app.get('/', function(req, res){
     //req.clear();

    //Consulta ao banco de dados
    conexao.query('SELECT * FROM ATIVIDADES', function(err, resultados, campos){
    if(err) throw err;
    // Resultados
    console.log(resultados);
    // Envia os resultados como resposta ao servidor
    res.json(resultados);
    });
});

// Servidor
app.listen(8080);