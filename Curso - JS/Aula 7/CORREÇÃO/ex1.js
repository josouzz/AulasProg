/**
 * 1) Percorram a lista listaDeValores e, para cada elemento, multiplique o esse elemento pelo próximo da lista.
 * Note que: ao chegar no final da lista, não há um próximo elemento. Nesse caso, multiplique o último elemento pelo primeiro.
 * Salve os resultados das multiplicações num outro array e no final do programa, imprima a lista final na tela.
 */

const listaDeValores = [100, 123, 44, 77, 59, 129, -54, -334, 2, 0];

// const resultado = [ // resposta de preguiçoso
//   listaDeValores[0] * listaDeValores[1],
//   listaDeValores[1] * listaDeValores[2],
//   listaDeValores[2] * listaDeValores[3],
//   listaDeValores[3] * listaDeValores[4],
//   listaDeValores[4] * listaDeValores[5],
//   listaDeValores[5] * listaDeValores[6],
//   listaDeValores[6] * listaDeValores[7],
//   listaDeValores[7] * listaDeValores[8],
//   listaDeValores[8] * listaDeValores[9],
//   listaDeValores[9] * listaDeValores[0],
// ];

const resultado = [];

for (let i = 0; i < listaDeValores.length; i++) {
  if (i === listaDeValores.length - 1) {
    resultado.push(listaDeValores[i] * listaDeValores[0]);
  } else {
    resultado.push(listaDeValores[i] * listaDeValores[i+1]);
  }
}

console.log(resultado);