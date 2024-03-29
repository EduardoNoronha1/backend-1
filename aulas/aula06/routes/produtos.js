const express = require("express");

const produtosController =
require('../controllers/controller_produto')

const router = express.Router();

router.get('/', produtosController.listarTodos);

router.get('/:produtoId', produtosController.buscarPeloId, produtosController.validarDados,  produtosController.exibir);

router.post('/', produtosController.criar );

router.put('/:produtoId', produtosController.buscarPeloId, produtosController.validarDados, produtosController.atualizar);

router.delete('/:produtoId', produtosController.buscarPeloId, produtosController.validarDados, produtosController.remover);

module.exports = router;

