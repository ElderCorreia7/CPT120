// Importar módulo express
const express = require('express');


// Importar módulo mysql
const mysql = require('mysql2');


// App
const app = express();


// Configuração de conexão
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


// Rota do servidor para consultar usuários
app.get('/usuarios', function(req, res){
   // Consulta ao banco de dados
   conexao.query('SELECT * FROM USUARIO', function(err, resultados, campos){
       if(err) throw err;
       // Resultados
       console.log(resultados);
       // Envia os resultados como resposta ao servidor
       res.json(resultados);
   });
});

// Rota do servidor para consultar atividades
app.get('/atividades', function(req, res){
   // Consulta ao banco de dados
   conexao.query('SELECT * FROM ATIVIDADES', function(err, resultados, campos){
       if(err) throw err;
       // Resultados
       console.log(resultados);
       // Envia os resultados como resposta ao servidor
       res.json(resultados);
   });
});

// Rota do servidor para consultar relação usuário_atividade
app.get('/usuarios_atividades', function(req, res){
   // Consulta ao banco de dados
   conexao.query('SELECT * FROM USUARIO_ATIVIDADES', function(err, resultados, campos){
       if(err) throw err;
       // Resultados
       console.log(resultados);
       // Envia os resultados como resposta ao servidor
       res.json(resultados);
   });
});

// Rota do servidor para raiz
app.get('/', function(req, res){
   res.send('Servidor em execução...');
});

/*
// Redirecionamento para ...
app.get('/', function(req, res){
   res.redirect('/atividades');
});*/

// Inicialização do Servidor
app.listen(8080);