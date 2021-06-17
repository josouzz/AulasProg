/* Usando um loop while, escreva um algoritmo que, dado um número "aleatório", verifique se esse número se encontra na sequência de
fibonacci.
*/


let numeroAnterior1 = 1;
let numeroAnterior2 = 1;
let numeroAtual = numeroAnterior1 + numeroAnterior2;
let numeroAleatorio = 55;

while (numeroAtual < numeroAleatorio) {
  console.log(numeroAtual);
  numeroAnterior1 = numeroAnterior2;
  numeroAnterior2 = numeroAtual;
  numeroAtual = numeroAnterior1 + numeroAnterior2;
}

if (numeroAleatorio === numeroAtual) {
    console.log('O número', numeroAleatorio,  'pertence sequência de Fibonacci.');
} else  {
    console.log('O número', numeroAleatorio, ' não pertence à sequência de Fibonacci.');
}


/*
const numero = 56;
let auxiliar1 = 1;
let auxiliar2 = 1;
let atual = auxiliar1 + auxiliar2;
if (numero === 1) {
   console.log(`O número 1 pertence à sequencia de fibonacci!`);
} else if (numero < 1) {
   console.log(`Os números da sequência de fibonacci começam a partir de 1!`);
} else {
   let pertence = false;
   while(atual <= numero) {
     console.log(`O número atual da sequência é: ${atual}`);
     if (atual === numero) {
       pertence = true;
     }
     auxiliar1 = auxiliar2;
     auxiliar2 = atual;
     atual = auxiliar1 + auxiliar2;
   }
   if (pertence === true) {
     console.log(`O número ${numero} pertence à sequencia de fibonacci!`);
   } else {
     console.log(`O número ${numero} não pertence à sequencia de fibonacci!`);
   }
 }
 */
