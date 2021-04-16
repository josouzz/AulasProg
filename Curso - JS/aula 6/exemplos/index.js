// 1, 1, 2, 3, 5, 8, 13, ...

const numero = 13;
let fibonacci = [];
// for (let i = 1; i <= numero; i++) {
//   if (i === 1 || i === 2) {
//     fibonacci[i-1] = 1;
//   } else {
//     fibonacci[i-1] = fibonacci[i-2] + fibonacci[i-3]
//   }
// }

for (let i = 1; i <= numero; i++) {
  if (i === 1 || i === 2) {
    fibonacci[i-1] = { posicao: i, valor: 1 };
  } else {
    fibonacci[i-1] = { posicao: i, valor: fibonacci[i-2].valor + fibonacci[i-3].valor };
  }
}

imprimeTela(fibonacci);

function imprimeTela(lista) {
  let saida = "Posição:\tValor:";
  // for (let i = 0; i < lista.length; i++) {
  //   saida += `\n${i+1}\t\t${lista[i]}`;
  // }
  for (let i = 0; i < lista.length; i++) {
    saida += `\n${lista[i].posicao}\t\t${lista[i].valor}`;
  }
  console.log(saida);
}