/* Usando um loop while, escreva um algoritmo que, dado um número "aleatório", verifique se esse número se encontra na sequência de
fibonacci.
*/

let numeroAnterior1 = 1;
let numeroAnterior2 = 1;
let numeroAtual = numeroAnterior1 + numeroAnterior2;
let numeroAleatorio = 55;


while(numeroAtual <= numeroAleatorio) {
  console.log(numeroAtual);
  numeroAnterior1 = numeroAnterior2;
  numeroAnterior2 = numeroAtual;
  numeroAtual = numeroAnterior1 + numeroAnterior2;
}

if (numeroAleatorio === numeroAtual) {
  console.log('O número ${numeroAleatorio} pertence sequência de Fibonacci.');
} else {
   console.log('O número ${numeroAleatorio} não pertence à sequência de Fibonacci.');
} 