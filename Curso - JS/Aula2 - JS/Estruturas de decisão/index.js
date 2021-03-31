/**
 * Desvios lógicos
 * 
 * let idade = 17;
 * 
 * Ex.: Se eu for maior de idade, eu posso comprar bebida alcoolica. -> idade >= 18 // false
 *      Senão, eu não posso comprar bebida alcoólica.
 * 
 *      Se eu for maior de idade eu posso tirar a habilitação -> idade >= 18 // false
 *      Senão, se eu tiver ao menos 17 anos, eu posso tirar a provisória -> idade === 17 // true
 *      Senão, eu devo esperar até completar ao menos 17 anos.
 */

// IF

let idade = 25;

if (idade >= 18) {
  console.log("Eu posso comprar bebida alcoólica!");
} else {
  console.log("Eu não tenho idade suficiente.");
}

if (idade >= 18) {
  console.log("Eu posso tirar habilitação!");
} else if (idade === 17) {
  console.log("Eu posso tirar a provisória");
} else {
  console.log("Eu devo esperar até completar ao menos 17 anos");
}

if (idade === 0) {
  console.log("Eu nem nasci ainda doido!");
}

idade = false || 0 || 4;
if (idade) {
  console.log("idade é verdadeiro!");
}