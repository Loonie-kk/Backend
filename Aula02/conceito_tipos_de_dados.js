// Tipos de dados
// No javascript, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos faxer com os valores.

//Principais tipos de dados:
// String (textos)
// Number (números)
// Boolean (verdadeiro ou falso)
// Object (Objetos, que agrupam informações)
// Array (Lista de valores)
// Null (Valor vazio)
// Undefined (quando algo não foi definido)

// String (Textos)
// Uma String é um texto, sempre escrito entre aspas ("" ou '')
let nome = "Titania";
let mensagem = 'Olá, mundo!';

console.log(nome);
console.log(mensagem);

let saudacao = "Olá, " + nome + "!";
console.log(saudacao); //Exibe "Olá, Jarvis!"

// typeof
// O typeof serve para descobrir o tipo de um valor ou variável

let nomeDois = "Gara";
console.log(nomeDois);
console.log(typeof nomeDois);

let soma = 10 + 5;
console.log(soma);
