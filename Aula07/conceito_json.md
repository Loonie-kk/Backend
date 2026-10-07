<!-- JSON significa JavaScript Object Notation e é um formato de representação e troca de dados. -->  

JSON é como ficha de cadastro 

Ficha Fisica:                  JSON:
Nome: Phoenix                  "nome": "Phoenix" 
Idade: 24                      "idade": 24
Cidade: SP                     "cidade": "SP"

É um formato para organizar dados que todo mundo entende (qualquer linguagem)


<!-- ============================================= -->
{
    "cachorro":{
        "nome": "Venari",
        "idade": 3,
        "raca": "Labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso"],
        "dono": {
            "nome": "Khora",
            "telefone": "11999999658"
        }
    }
}
<!-- ============================================= -->
Explicação
<!-- ============================================= -->
// String (texto) - Sempre com aspas
     "nome": "Venari"

// Number (Número) - Sem aspas
        "idade": 3,
        "peso": 25.5,

// Boolean (true/false)
        "vacinado": true,

// Array (Lista) - com colchetes
        "brinquedos": ["bola", "osso"],

// Object (objeto) - com chaves
        "dono": {
            "nome": "Khora",
            "telefone": "11999999658"
        }

// Null (vazio)
        "dataFalecimento": null