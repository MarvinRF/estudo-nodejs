const express = require("express");
const server = express();

//http://localhost:3000/hello?nome=felipe&idade=23
//Query params = ?nome=felipe&idade=23

//http://localhost:3000/hello/felipe/23
//Route params = /hello/:nome/:idade

server.get("/hello", (req, res) => {
  //Query params
  const { nome, idade } = req.query;

  if (!nome || !idade) {
    return res.status(400).json({
      sucess: false,
      message: "Nome e idade são informações obrigatórias",
    });
  }
  return res.json({
    sucess: true,
    message: `Olá ${nome}, você tem ${idade} anos`,
    data: {
      name: nome,
      age: idade,
    },
  });
});

server.listen(3000);
