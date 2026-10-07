<!-- 📊 Status Codes (Respostas do servidor) -->
2xx - Sucesso (Tudo certo- padrao de sucesso)
    200 - ok (requisição funcionou)
    201 - Criado (post funcionou)

3xx - Redirecionamento (Mudou de lugar)
    301 - Mudou permanentemente

4xx - Erro do Cliente (Você errou)
    400 - Requisição errada
    401 - Não autorizada (sem login)
    403 - Proibido (Login sem permissão)
    404 - Não enoctrado
    429 - Muitas requisições em pouco tempo

5xx - Erro do Servidor (Eles erraram)
    500 - Erro interno no servidor
    503 - Serviço indisponível

Cenário: Você pede uma pizza! 🍕

200 = "Aqui está a sua pizza" ✅
404 = "Não temos essa pizza" ❌
500 = "O forno queimou" ♨️
401 = "Só entregamos para clientes" 🔒 
429 = "Muitos pedidos, aguarde" ⏳