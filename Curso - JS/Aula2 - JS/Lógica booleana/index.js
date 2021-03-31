// OPERADORES BOOLEANOS

/**
 * OPERADORES DE COMPARAÇÃO:
 */

// 1) IGUALDADE:
// a) Igualdade Semântica:
// let a = "1" == 1;
// let b = 0 == false;
// let c = true == 1;
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);

// b) Igualdade Estrita:
// let d = "1" === 1;
// let e = 0 === 0;
// let f = true === true;
// console.log("d:", d);
// console.log("e:", e);
// console.log("f:", f);

// 2) MAIOR QUE ( > )
let a = 10 > 5; // true;
let b = 5 > 7; // false;

// 3) MENOR QUE ( < )
let c = 10 < 7; // false;
let d = 15 < 25; // true;

// 4) MAIOR OU IGUAL A ( >= )
let e = 10 >= 10; // true;
let f = 9 >= 8; // true;

// 5) MENOR OU IGUAL A ( <= )
let g = 10 <= 10; // true;
let h = 9 <= 8; // false;

/**
 * OPERADORES LÓGICOS
 */

// 1) NEGAÇÃO (!):
let i = !true; // false;
let j = !false; // true;


// 2) AND (&&):

/**
 * TABELA VERDADE (AND):
 * 
 * DECLARAÇÃO A | OPERADOR | DECLARAÇÃO B | RESULTADO 
 *     true     |    &&    |     true     |    true
 *     true     |    &&    |    false     |    false 
 *     false    |    &&    |     true     |    false
 *     false    |    &&    |    false     |    false
 */


// 3) OR (||):

/**
 * TABELA VERDADE (OR):
 * 
 * DECLARAÇÃO A | OPERADOR | DECLARAÇÃO B | RESULTADO 
 *     true     |    ||    |     true     |    true
 *     true     |    ||    |    false     |    true
 *     false    |    ||    |     true     |    true
 *     false    |    ||    |    false     |    false
 */

const a1 = true && false && 10; // false
const a2 = true && 20 && true; // true
const a3 = true && 0 && true; // 0
const a4 = true && -1 && "texto"; // texto

// console.log("a1: ", a1); 
// console.log("a2: ", a2);
// console.log("a3: ", a3);
// console.log("a4: ", a4);

// REGRA DO OPERADOR &&:
// DEVOLVE SEMPRE O PRIMEIRO VALOR FALSO DA EXPRESSÃO OU O ÚLTIMO VALOR VERDADEIRO.

const a5 = false || 0 || 4; // 4
const a6 = 20 || true || true; // 20
const a7 = false || true || true; // true
const a8 = "texto" || true || -1; // texto
const a13 = false || false || 0; // 0

// console.log("a5: ", a5);
// console.log("a6: ", a6);
// console.log("a7: ", a7);
// console.log("a8: ", a8);
// console.log("a13: ", a13);

// REGRA DO OPERADOR ||:
// DEVOLVE SEMPRE O PRIMEIRO VALOR VERDADEIRO DA EXPRESSÃO OU O ÚLTIMO VALOR FALSO.

const a9 = 0 && false && 10; // 0

const a10 = false && 20 || true; // true
//                 false  || true

const a11 = true || 0 && false; // true
//                  0 && false 
//                    false
//          true || false 

const a12 = (true || 0) && false; // false
//               true   && false 

const a14 = true && true && "texto"; // texto

console.log("a9: ", a9);
console.log("a10: ", a10);
console.log("a11: ", a11);
console.log("a12: ", a12);
console.log("a14: ", a14);

// REGRA GERAL: O OPERADOR && (AND) POSSUI PRIORIDADE SOBRE O OPERADOR || (OR).