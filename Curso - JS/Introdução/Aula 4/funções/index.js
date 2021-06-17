// Um jeito de declarar funções é utilizando:

function umaFuncao() {
  // código
}

umaFuncao();

//outraFuncao(); // isso gera um ReferenceError

const outraFuncao = function() { // function expression
  // código
  console.log("Olá Mundo!");
}

// outraFuncao();

// As function expressions NÃO SOFREM hoisting.



/**
 * PARÂMETROS PASSADOS POR VALOR:
 * string, number, boolean, undefined
 */

// function alteraValor(texto2) {
//   texto2 = "Outro texto";
//   console.log(`alteraValor: ${texto2}`);
// }

// let texto1 = "Um texto qualquer";
// alteraValor(texto1);
// console.log(`texto1: ${texto1}`);

/**
 * ARGUMENTOS DE TIPOS PRIMITIVOS (string, number, boolean, undefined) são passados para as funções por VALOR. 
 * Ou seja, qualquer mudança em seus conteúdos, fica reservada dentro do escopo da função. O valor "real" não é
 * alterado.
 */

/**
 * PARÂMETROS PASSADOS POR REFERÊNCIA:
 * objetos
 */

// function alteraValor2(objeto) {
//   objeto.nome = "Bofete";
//   console.log(`alteraValor2: ${objeto.nome}`);
// }

// let pessoa = { nome: "João" };
// console.log(`pessoa antes: ${pessoa.nome}`);
// alteraValor2(pessoa)
// console.log(`pessoa depois: ${pessoa.nome}`);

/**
 * ARGUMENTOS DE TIPOS OBJETO (array, dictionary, objetos no geral) são passados para as funções por REFERÊNCIA. 
 * Ou seja, qualquer mudança em seus conteúdos/atributos/propriedades, afetam o objeto "real", alterando, assim, seus valores dentro
 * e fora do escopo da função.
 */