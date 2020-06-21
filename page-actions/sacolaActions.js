const { client } = require('nightwatch-api');

const sacola = client.page.sacolaElements();

module.exports = {

    verificarProdutoAdicionado: (produto, qtdProdutoEsperado) => {

        sacola
            .expect
            .element('@itemListaSacola')
            .text.to.contain(produto);

        return sacola
                .expect
                .elements('@itemListaSacola')
                .count.to.equal(parseInt(qtdProdutoEsperado));
    },

    verificarSacolaVazia: (mensagem) => {

        return sacola
                .expect
                .element('@mensagemSacolaVazia')
                .text.to.equal(mensagem);
    }
}