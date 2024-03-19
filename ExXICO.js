// EXE4

// trazer os seguintes dados de 6 usuarios 

// NOME 
// SOBRENOME
// CIDADE 
// CPF 
// NOME DA AGENCIA DE BANCO EX: NUBANK, SANTANDER...
// SALARIO 
// FAZER A SOMA DOS SALDOS SALARIAIS 
// DEPOIS FAZER A DIVISAO POR 6
// Fazer uma IF e ElSE
// SE A PESSOA É MILHONARIA,RICA, BEM DE VIDA, CLASSE MEDIA E POBRE 
// E FAZER UMA IF E ELSE COM O VALOR DIVIDIDO DOS SALARIOS..
// SE A PESSSOA É MILHONARIA, RICA, BEM DE VIDA, CLASSE MEDIA E POBRE 
// E UTILIZAR O FOR PARA FICAR MAIS FACIL DE CODAR ESSA ATIVIDADE
// E FAZER UMA ARRAY

// DEPOIS FAZER UMA SAUDACAO 
// EX:  seu nome é lucas... sua idade.. seu cpf.. sua conta... 


var nome1 = "João";
var sobrenome1 = "Silva";
var CIDADE1 = "Blumenau";
var SALARI01= 50.000;
var CPF1= 1478963;
var AGENCIA1 = "Viacred";

var mensagem1 = "o nome e sobre nome do primero canditado é:" + nome1 + " " + sobrenome1 + " e a sua Cidade e:--> " + CIDADE1 + " com salario de: " + SALARI01 + " Seu CPF é o : " + CPF1 + " sua agencia  é : " + AGENCIA1;

var nome2 = "Chico";
var sobrenome2 = "Alencar";
var CIDADE2 = "Blumenau";
var SALARIO2= 30.000;
var CPF2= 3698741;
var AGENCIA2 = "Bradesco";

var mensagem2 = "o nome e sobre nome do primero canditado é:" + nome2 + " " + sobrenome2 + "e a sua Cidade e:-->" + CIDADE2 + " com salario de: " + SALARIO2 + " Seu CPF é o : " + CPF2 + " sua agencia  é : " + AGENCIA2;

var Nome3 = "Eduardo";
var sobrenome3 = "Pereira";
var CIDADE3 = "blumenau";
var SALARIO3 = 15.000;
var CPF3= 2587441;
var AGENCIA3 = "Cecred";

var mensagem3 = "o nome e sobre nome do primero canditado é" + Nome3 + " " + sobrenome3 + "e a sua Cidade e:-->" + CIDADE3 + " com salario de:" + SALARIO3 + " Seu CPF é o : " + CPF3 + " sua agencia  é : " + AGENCIA3;

var Nome4 = "Carlos";
var sobrenome4 = "Nogueira";
var Cidade4 = "Tijucas";
var SALARIO4 = 5.000;
var CPF4= 7896541;
var AGENCIA4 = "BB";

var mensagem4 = "o nome e sobre nome do primero canditado é:" + Nome4 + " " + sobrenome4 + "e a sua Cidade e:-->" + Cidade4 + " com salario de:" + SALARIO4 + " Seu CPF é o : " + CPF4 + " sua agencia  é : " + AGENCIA4;

var Nome5 = "Rodriguez";
var sobrenome5 = "Pereira";
var Cidade5 = "Indaial";
 var SALARIO5 = 1.000;
var CPF5= 2574189;
var AGENCIA5 ="Nubanck";

var mensagem5 = "o nome e sobre nome do primero canditado é:" + Nome5 + " " + sobrenome5 + " e a sua Cidade é:-->" + Cidade5 + " com salario de:" + SALARIO5 + " Seu CPF é o: " + CPF5 + " sua agencia  é : " + AGENCIA5;

var soma =  SALARI01+SALARIO2+SALARIO3+SALARIO4+SALARIO5;
var media = soma/6;

console.log (mensagem1, mensagem2, mensagem3, mensagem4, mensagem5);

if (media>= 0, media < 1.000) {
    console.log("Você é pobre.");
} else if (media >= 1.000, media < 15.000) {
    console.log("Você é Classe media.");
} else if (media >= 15.000, media < 999.000) {
    console.log("Você é rico.");
} else if (media >= 1000.000){
    console.log("Você é milhonario.")
}


let Nomes = [ nome1 , nome2 , Nome3 , Nome4, Nome5 ]
let mensagem = " seu nome é " + Nomes

for (let i = nome1 ; i <=  Nomes.length; i++){
    mensagem += nomes  [i] + "," ;
}

console.log (mensagem)