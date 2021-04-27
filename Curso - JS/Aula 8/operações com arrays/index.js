const lista = [
  {id: 8, nome: "Joao"},
  {id: 1, nome: "Guilherme"},
  {id: 3, nome: "Guilherme"},
  {id: 2, nome: "Guilherme"},
  {id: 7, nome: "Joao"},
  {id: 9, nome: "Paola"},
  {id: 4, nome: "Paola"},
  {id: 6, nome: "Joao"},
  {id: 5, nome: "Jefferson"},
  {id: 10, nome: "Joao"},
  {id: 12, nome: "Joao"},
  {id: 11, nome: "Jefferson"}
];

function bubbleSort(list) {
  let trocado = false;
  do {
    trocado = false;
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i].id > list[i+1].id) {
        const aux = {...list[i]};
        list[i] = {...list[i+1]};
        list[i+1] = {...aux};
        trocado = true;
      }
    }
  } while(trocado);
}

// ordenação por ID
// lista.sort( (a, b) => {
//   if (a.id - b.id < 0) {
//     return 1;
//   } else if (a.id - b.id > 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// ordenação por ordem alfabética
// lista.sort( (a, b) => {
//   if (a.nome < b.nome) {
//     return -1;
//   } else if (a.nome > b.nome) {
//     return 1;
//   } else {
//     return 0;
//   }
// });


// ordenação mista
// lista.sort( (a, b) => {
//   if (a.nome < b.nome) {
//     return -1;
//   } else if (a.nome > b.nome) {
//     return 1;
//   } else {
//     return a.id - b.id
//   }
// });

// function sort(a, b) {
//   if (a.nome < b.nome) {
//     return -1;
//   } else if (a.nome > b.nome) {
//     return 1;
//   } else {
//     return a.id - b.id
//   }
// }

// lista.sort(sort);

// for (let i = 0; i < list.length; i++) {
//   console.log(`id: ${lista[i].id} nome: ${lista[i].nome}`);
// }

// function paraCada(elemento, indice) {
//   console.log(`indice: ${indice} id: ${elemento.id} nome: ${elemento.nome}`)
// }
// lista.forEach(paraCada);

// lista.forEach( (elemento, indice) => {
//   console.log(`indice: ${indice} id: ${elemento.id} nome: ${elemento.nome}`)
// });

// const novaLista = lista.map( (elemento) => {
//   return {...elemento, ocupacao: "Programador" };
// });
// console.log(lista);
// console.log(novaLista);

// console.log([1,2,3,4,5].reduce( (acumulador, elemento) => {
//   console.log(acumulador, elemento)
//   return acumulador + elemento;
// }));

// const indiceJoaoID10 = lista.findIndex( (elemento) => {
//   return elemento.nome === "Joao" && elemento.id === 10
// });
// console.log(indiceJoaoID10);