/**
 * 2) Dada uma palavra inserida pelo usuário (vocês, no caso) imprima na tela a quantidade de letras dessa palavra e a 
 * quantidade de vogais.
 * 
 * ex: 
 * const texto = "um texto qualquer";
 * for (let i = 0; i < texto.length; i++) {
 *   console.log(texto[i]);
 * }
 */

const texto = "Socorra-me, Subi nUM onibus Em marrocos";
const vogais = ["a", "e", "i", "o", "u"];
const consoantes = ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let numVogais = 0;
let numLetras = 0;
for (let letra = 0; letra < texto.length; letra++) {
  if (verificaLetra(texto[letra], vogais)) {
    numLetras += 1;
    numVogais += 1;
  } else if (verificaLetra(texto[letra], consoantes)) {
    numLetras += 1;
  }
}

console.log(`O texto digitado possui ${numVogais} vogais e ${numLetras} letras. Ao todo, o texto possui ${texto.length} caracteres.`);

function verificaLetra(caractere, listaDeLetras) {
  for (let i = 0; i < listaDeLetras.length; i++) {
    if (caractere.toLowerCase() === listaDeLetras[i]) {
      return true;
    }
  }

  return false;
}
