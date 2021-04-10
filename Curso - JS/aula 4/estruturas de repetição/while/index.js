// FIBONACCI 
// 1, 1, 2, 3, 5, 8, 13, 21 ...

// LUCCAS
// 1, 3, 4, 7, 11, 18, 29, ...

// const tabuada = 13;
// let i = 1;
// while (i <= 10) {
//   console.log(tabuada * i);
//   i = i + 1;
// }

let numeroAnterior1 = 1;
let numeroAnterior2 = 3;
let numeroAtual = numeroAnterior1 + numeroAnterior2;

while(numeroAtual < 4) {
  console.log(numeroAtual);
  numeroAnterior1 = numeroAnterior2;
  numeroAnterior2 = numeroAtual;
  numeroAtual = numeroAnterior1 + numeroAnterior2;

  // if (numeroAtual === 199) {
  //   break;
  // }
}