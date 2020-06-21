module.exports = {

    elements: {
        itemListaSacola: {
            selector: '//div[@class="BasketItem"]',
            locateStrategy: 'xpath'    
        },
        mensagemSacolaVazia: {
            selector: '//div[@class="EmptyBasket-title"]',
            locateStrategy: 'xpath' 
        }
    }
}