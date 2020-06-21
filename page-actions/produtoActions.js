const { client } = require('nightwatch-api');

const produto = client.page.produtoElements();

module.exports = {

    clicarBotaoAdicionarSacola: () => {

        return produto
                .click('@botaoAdicionarSacola');
    }
}