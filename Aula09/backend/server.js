// ==========================
// Nossa API de cachorros
//
//===========================
// Agora as fotos NÂO são mais baixadas automaticamente!.
// Elas DEVEM existir manualmete na pasta
// data/fotos
// ==========================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cahcorros/:raca

//  Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importar o módulo de arquivo do NODE
const fs = require("fs")
// Importa utilidades para trabalhar com caminhos ed arquivos
const path = require("path")
// Importar o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json")
// criar a aplicação com o express
const app = express();
// definir a porta onde o servidor vai rodar
const PORT = 3000;
// Habilitar o uso do CORS na aplicação 
app.use(cors());

//==================================================================
//  SERVIR ARQUIVOS ESTÀTICOS
//==================================================================

// Nós falamos para o express
//  "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // canibho real da pasta do servidor
    )
)

//==================================================================
//  Função Auxiliar
//==================================================================

// função que recebe um array e retorna um item aleatorio dele
function sortear(array) {
    // gera m numero aleatorio entre 0 e o tamanho do array
    // array.length - conta quantos itens exitem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() * array.length - Multiplica o número sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredondando para baixo.
    const i = Math.floor(Math.random() * array.length)
    // const i = guarda a posição na variavel i
    // retorna o item sorteado
    return array[i];
}