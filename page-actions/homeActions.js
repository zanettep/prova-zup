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

    verificarResultadoConsulta: (produto, qtdProdutoEsperado) => {

        home
            .expect
            .elements('@cardProduto')
            .count.to.equal(parseInt(qtdProdutoEsperado));

        return home
                .expect
                .element('@cardProduto')
                .to.have.property('title')
                .equals(produto);
    }
}