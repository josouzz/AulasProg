let numeroAnterior1 = 1;
let numeroAnterior2 = 1;
let numeroAtual = numeroAnterior1 + numeroAnterior2;
const NA = 55;


while(numeroAtual <= NA) {
  console.log(numeroAtual);
  numeroAnterior1 = numeroAnterior2;
  numeroAnterior2 = numeroAtual;
  numeroAtual = numeroAnterior1 + numeroAnterior2;
}

if (NA === numeroAtual) {
  console.log('O número ${numeroAleatorio} pertence sequência de Fibonacci.');
} else {
   console.log('O número ${numeroAleatorio} não pertence à sequência de Fibonacci.');
} 



