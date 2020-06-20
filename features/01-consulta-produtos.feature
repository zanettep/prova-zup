# language: pt
Funcionalidade: Consulta Produtos

Esquema do Cenário: Consultar produto com sucesso

  Dado que estou na página de home do site Magazine Luiza
  Quando preencho consulto um produto "<produto>"
  Então o produto consultado deve ser apresentado "<produto>" "<qtd-produto-esperado>"

Exemplos:
| produto                                    | qtd-produto-esperado |
| Cabo GE USB 2.0 para dispositivos mini USB | 1                    |