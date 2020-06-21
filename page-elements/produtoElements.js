module.exports = {

    elements: {
        botaoAdicionarSacola: {
            selector: '//button[@class="button__buy button__buy-product-detail js-add-cart-button js-main-add-cart-button js-add-box-prime"]',
            locateStrategy: 'xpath'
        },
        botaoSacola: {
            selector: '//a[@class="container-checkout"]',
            locateStrategy: 'xpath'
        }
    }
}