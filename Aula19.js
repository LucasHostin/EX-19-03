// PESSOAL SEGUE ABAIXO ALGUNS EXEMPLOS DO "While"
// neste codigo do ultimo Exercicio que fizemos. 
// procurem incluir ele! 


let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let num = 1;
while (num < 10) {
  console.log(num);
  num += 2; // Incrementa o número em 2 a cada iteração
}

const colors = ['red', 'green', 'blue', 'yellow'];
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

let userInput;
while (true) {
  userInput = prompt('Digite "sair" para terminar:');
  if (userInput.toLowerCase() === 'sair') {
    break; // Sai do loop se a entrada for "sair"
  }
  console.log('Você digitou: ' + userInput);
}
