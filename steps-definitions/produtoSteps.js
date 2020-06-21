const { Given, Then, When } = require('cucumber');

const produtoActions = require('../page-actions/produtoActions.js');

When('no botão Adicionar à sacola', () => {

    return produtoActions.clicarBotaoAdicionarSacola();
});

When('clico no botão Sacola', () => {

    return produtoActions.clicarBotaoSacola();
});