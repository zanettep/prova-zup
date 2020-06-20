module.exports = {

    url: 'https://busca.magazineluiza.com.br/',
    elements: {
        pagina: {
            selector: 'body'    
        },
        campoConsultarProduto: {
            selector: '#inpHeaderSearch'
        },
        cardProduto: {
            selector: '//li[@class = "nm-product-item"]//a',
            locateStrategy: 'xpath'
        },
        mensagemNaoEncontrado1: {
            selector: '//div[@class="nm-not-found-message1"]',
            locateStrategy: 'xpath'
        },
        mensagemNaoEncontrado2: { 
            selector: '//div[@class="nm-not-found-message2"]',
            locateStrategy: 'xpath'
        }
    }
}