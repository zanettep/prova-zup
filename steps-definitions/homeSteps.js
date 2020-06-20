const { Given, Then, When } = require('cucumber');

const homeActions = require('../page-actions/homeActions.js');

Given('que estou na página de home do site Magazine Luiza', () => {

    return homeActions.abrirSite();
});

When('preencho consulto um produto {string}', (produto) => {

    return homeActions.consultarProduto(produto);
});

Then('o produto consultado deve ser apresentado {string} {string}', (produto, qtdProdutoEsperado) => {

    return homeActions.verificarConsultaProdutoEncontrado(produto, qtdProdutoEsperado);
});

Then('duas mensagens informando que o produto consultado não foi encontrado devem ser apresentadas {string} {string} {string}', (mensagem1, mensagem2, qtdProdutoEsperado) => {

    return homeActions.verificarConsultaProdutoNaoEncontrado(mensagem1, mensagem2, qtdProdutoEsperado);
});