const { Given, Then, When } = require('cucumber');

const sacolaActions = require('../page-actions/sacolaActions.js');

Then('o produto selecionado deve ser apresentado na sacola {string} {string}', (produto, qtdProdutoEsperado) => {

    return sacolaActions.verificarProdutoAdicionado(produto, qtdProdutoEsperado);
});

Then('uma mensagem informando que a sacola está vazia deve ser apresentada {string}', (mensagem) => {

    return sacolaActions.verificarSacolaVazia(mensagem);
});