const { client } = require('nightwatch-api');

const home = client.page.homeElements();

module.exports = {

    abrirSite: () => {

        return home
                .navigate()
                .waitForElementVisible('@pagina');
    },

    consultarProduto: (produto) => {

        return home
                .setValue('@campoConsultarProduto', [produto, client.Keys.ENTER])
    },

    clicarCardProduto: () => {

        return home
                .click('@cardProduto');
    },

    verificarConsultaProdutoEncontrado: (produto, qtdProdutoEsperado) => {

        home
            .expect
            .element('@cardProduto')
            .to.have.property('title')
            .equals(produto);

        return home
                .expect
                .elements('@cardProduto')
                .count.to.equal(parseInt(qtdProdutoEsperado));
    },

    verificarConsultaProdutoNaoEncontrado: (mensagem1, mensagem2, qtdProdutoEsperado) => {

        home
            .expect
            .element('@mensagemNaoEncontrado1')
            .text.to.equal(mensagem1);
        
        home
            .expect
            .element('@mensagemNaoEncontrado2')
            .text.to.equal(mensagem2);
    
        return home
                .expect
                .elements('@cardProduto')
                .count.to.equal(parseInt(qtdProdutoEsperado));
    }
}