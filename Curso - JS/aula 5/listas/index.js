                    //        0                 1           2               3
const listaDeLivros = ["O Nome do Vento", "Harry Potter", "Duna", "A Rebelião de Lúcifer"];

console.log(listaDeLivros[3]); // rebelião...
console.log(listaDeLivros[4]); // undefined

listaDeLivros.push("Morro dos Ventos Uivantes"); // adiciona um elemento no FINAL da lista
console.log(listaDeLivros[4]);

listaDeLivros.unshift("Orgulho e Preconceito"); // adiciona um elemento no INICIO da lista
console.log(listaDeLivros[0]);

console.log(listaDeLivros[listaDeLivros.length - 1]); // ultimo elemento da lista
// proriedade .length de listas retorna o número de ELEMENTOS da lista.

const ultimoeElemento = listaDeLivros.pop(); // remove o último elemento da lista e o retorna;
console.log(ultimoeElemento, listaDeLivros);

const primeiroElemento = listaDeLivros.shift(); // remove o primeiro elemento da lista e o retorna;
console.log(primeiroElemento, listaDeLivros);

const listaEmBranco = new Array(10); // instanciando a classe/objeto Array passando como argumento o número 10
// que representa o número de "casas"/elementos do meu array.
console.log(listaEmBranco[0]);
console.log(listaEmBranco.length);
