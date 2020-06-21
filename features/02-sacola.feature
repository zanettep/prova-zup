# language: pt
Funcionalidade: Sacola

Contexto:
    Dado que estou na página de home do site Magazine Luiza

Esquema do Cenário: Inserir produto na sacola com sucesso

    Quando preencho consulto um produto "<produto>"
        E clico no produto apresentado
        E no botão Adicionar à sacola
    Então o produto selecionado deve ser apresentado na sacola "<produto>" "<qtd-produto-esperado>"

Exemplos:
| produto                                    | qtd-produto-esperado |
| Cabo GE USB 2.0 para dispositivos mini USB | 1                    |
