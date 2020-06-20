const { Given, Then, When } = require('cucumber');

const homeActions = require('../page-actions/homeActions.js');

Given('que estou na página de home do site Magazine Luiza', () => {

    return homeActions.abrirSite();
});

When('preencho consulto um produto {string}', (produto) => {

    return homeActions.consultarProduto(produto);
});

Then('o produto consultado deve ser apresentado {string} {string}', (produto, qtdProdutoEsperado) => {

    return homeActions.verificarResultadoConsulta(produto, qtdProdutoEsperado);
});