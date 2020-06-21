# language: pt
Funcionalidade: Consulta Produtos

Contexto:
    Dado que estou na página de home do site Magazine Luiza

Esquema do Cenário: Consultar produto com sucesso

    Quando preencho consulto um produto "<produto>"
    Então o produto consultado deve ser apresentado "<produto>" "<qtd-produto-esperado>"

Exemplos:
| produto                                    | qtd-produto-esperado |
| Cabo GE USB 2.0 para dispositivos mini USB | 1                    |

Esquema do Cenário: Consultar produto não cadastrado

    Quando preencho consulto um produto "<produto>"
    Então duas mensagens informando que o produto consultado não foi encontrado devem ser apresentadas "<mensagem1>" "<mensagem2>" "<qtd-produto-esperado>"

Exemplos:
| produto  | mensagem1                                               | mensagem2                                               | qtd-produto-esperado |
| TESTE123 | Sua busca por TESTE123 não encontrou resultado algum :( | Por favor, tente outra vez com termos menos específicos | 0                    |