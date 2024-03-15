const express = require("express");

const routerProdutos = require("../aula04/router");

const app = express();

app.use(express.json());

app.use(routerProdutos);

app.listen(3000, function () {
  console.log("API está ON!");
});

module.exports = app;