/**
 * Exercício 1:
 * 
 * Dado 3 números informados pelo usuário, informe se os valores representam um triângulo válido 
 * e se o triângulo é isósceles, equilátero ou escaleno.
 */

let lado1 = 10
let lado2 = 8
let lado3 = 6

function ehTriangulo(check) {
 
 let triangulo = 0
    if (((lado1 + lado2) > lado3) && ((lado1 + lado3) > lado2) && ((lado2 + lado3) > lado1)){
        triangulo = triangulo + 1;
    }else {

    }
    return triangulo;
}

ehTriangulo()

if ((ehTriangulo = 1) && (lado1 != lado2) && (lado2 != lado3) && (lado3 != lado1)){
    console.log(`Esse triângulo é escaleno`);
}else if((ehTriangulo = 1) && (lado1 = lado2 ) && (lado2 = lado3) && (lado3 = lado1)){
    console.log(`Esse triângulo é isóceles e equilátero`);
}else if ((ehTriangulo = 1) || (lado1 = lado2) || (lado2 = lado3) || (lado3 = lado1)) {
    console.log(`Esse triângulo é isóceles`);
}else {
    console.log(`Não é possível construir um triângulo com essas medidas`)
}
