/**
 *  Sem compilar o código abaixo, determinem os valores das variáveis:
 */



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
 
 let a = 2
 
 let b = 4
 
 let c = -5
 
 let delta = (Math.pow(b, 2) - (4*a*c))
 
 let d = Math.sqrt(delta)

 let  x1 = (-b + d)/(2 * a)

 let  x2 = (-b - d)/(2 * a)

 if (delta > 0) {
     console.log("As raízes dessa equação são:", x1, "e", x2);

 } else if (delta === 0) {
     console.log("A raiz dessa equação é:", x1);

 } else {
     console.log("Essa equação não possuí raiz no conjuto dos REAIS");
 }
