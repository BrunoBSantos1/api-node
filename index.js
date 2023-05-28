const express = require("express");
const mysql = require("mysql2");
const dbConfig = require("./db.config");

// Configuração do servidor Express
const app = express();

// Conexão com o banco de dados
const connection = mysql.createConnection({
  host: '34.170.215.176',
  user: 'root',
  password: 'bruno1234',
  database: 'times',
});

// RETORNA TODOS OS DIRETORES
app.get("/diretores", (req, res) => {
  connection.query("SELECT * FROM diretores", (error, results) => {
    if (error) {
      console.error("Erro ao executar a consulta:", error);
      res.status(500).json({ error: "Erro ao buscar os times" });
    } else {
      res.json(results);
      console.log(res);
    }
  });
});

// RETORNA TODOS OS FUNCIONARIOS
app.get("/funcionarios", (req, res) => {
  connection.query("SELECT * FROM funcionarios", (error, results) => {
    if (error) {
      console.error("Erro ao executar a consulta", error);
      res.status(500).json({ error: "Erro ao buscar times" });
    } else {
      res.json(results);
      console.log(res);
    }
  });
});

// ... outras rotas para criar, atualizar e excluir times ...

// Inicialização do servidor
const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
