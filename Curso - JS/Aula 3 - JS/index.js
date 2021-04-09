

let numeroQualquer = 56;
let numeroAnterior1 = 1;
let numeroAnterior2 = 1;
let numeroAtual = numeroAnterior1 + numeroAnterior2;
function sequencia() {
    console.log(numeroAnterior1);
    console.log(numeroAnterior2);
  while(numeroAtual + numeroQualquer <= 2 * numeroQualquer)  {
    console.log(numeroAtual);
    numeroAnterior1 = numeroAnterior2;
    numeroAnterior2 = numeroAtual;
    numeroAtual = numeroAnterior1 + numeroAnterior2;
  }
  return numeroAtual
}

fibonacci = sequencia()
if (fibonacci = numeroQualquer) {
  console.log('o número', numeroQualquer, 'faz parte da sequência de fibonacci')
} else {
  console.log('O número', numeroQualquer, 'não faz parte da sequência de fibonacci')
}
