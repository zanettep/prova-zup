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
        }
    }
}