// Inicio do Backend - JavaScript

// Variáveis

// Antigo, pode ser redeclarado e mudar o valor.
var idade = 10
var idade = 20 // não gera erro

// Moderno, pode mudar o valor, mas não pode ser redeclarado
let nome = "Maya Fey"
nome = "Mia Fey"; // permitido
// let nome = "Phoenix"; // erro

// const é Fixo, não pode mudar de valor
const pi = 3.14;
// pi = 40; // erro

//------------------------------
// Formas de escrever um código
//------------------------------

// Camel case ---- * A mais famosa
// - Primiera palavra minúscula
// - palavras seguintes coeçam com maiúscula

//let nomeCompleto; let idadeUsuario; functionCalcularIdade (){}

//_____________________________
// Pascalcase
// - Todas as palavras começam com letras maiúscula

//class UsuarioSistema {
//    constructor(nome, idade){
//        this.nome =nome;
//        this.idade = idade;
//    }
//};

//_____________________________
// Snake case
// - Palavras separadas por um _ (underline)

// let nome_completo; let total_vendas; 

// Template String
// console.log(`Sua idade é: ${idade} anos.` );