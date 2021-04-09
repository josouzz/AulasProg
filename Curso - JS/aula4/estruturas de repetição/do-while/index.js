let numeroAnterior1 = 1;
let numeroAnterior2 = 3;
let numeroAtual = numeroAnterior1 + numeroAnterior2;

do {
  console.log(numeroAtual);
  numeroAnterior1 = numeroAnterior2;
  numeroAnterior2 = numeroAtual;
  numeroAtual = numeroAnterior1 + numeroAnterior2;
} while (numeroAtual < 4);
