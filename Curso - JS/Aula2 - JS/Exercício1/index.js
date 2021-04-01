/**
 *  Sem compilar o código abaixo, determinem os valores das variáveis:
 */


 let a = true || 0 && -1 && false; 
 let b = 50 && -1 || true && -1 || false;
 let c = 0 || 0 && true || false;
 let d = 10 || 20 && "texto" && -1;
 
 /*
 console.log("a: ", a); 
console.log("b: ", b);
console.log("c: ", c);
console.log("d: ", d); */

 /**
  * Resultados do exercício 1, antes de rodar o node.js:
  * A) FALSE
  * B)-1
  * C)FALSE
  * D) N SEI   
  */
 
 /**
  * Determinem, via código, os resultados da seguinte equação de segundo grau:
  * 
  * 2x² + 4x - 5 = 0;
  * 
  * Caso a equação não possa ser resolvida, imprima na tela o motivo.
  */
 
 a = 2
 
 b = 4
 
 c = -5
 
 delta = Math.pow(b, 2) - (4*a*c)
 
 d = Math.sqrt(delta)

 x1 = (-b + d)/(2 * a)

 x2 = (-b - d)/(2 * a)

 if (d > 0) {
     console.log("As raízes dessa equação são:", x1, "e", x2);

 } else if (d === 0) {
     console.log("A raiz dessa equação é:", x1);

 } else {
     console.log("Essa equação não possuí raiz no conjuto dos REAIS");
 }
