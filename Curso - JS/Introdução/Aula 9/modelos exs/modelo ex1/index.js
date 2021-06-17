function onButtonClick() {
  // isósceles: 
  // equilátero:
  // escaleno:
  const lado1 = document.getElementById("input-lado-1");
  const lado2 = document.getElementById("input-lado-2");
  const lado3 = document.getElementById("input-lado-3");
  const resultado = document.getElementById("output-tipo-triangulo");
  if ( validaTriangulo(Number(lado1.value), Number(lado2.value), Number(lado3.value)) ) {

    if ( verificaEquilatero(Number(lado1.value), Number(lado2.value), Number(lado3.value)) ) {
      resultado.value = "Equilátero";
    } else if ( verificaIsosceles(Number(lado1.value), Number(lado2.value), Number(lado3.value)) ) {
      resultado.value = "Isósceles";
    } else {
      resultado.value = "Escaleno";
    }

  } else {
    resultado.value = "Os lados informados não formam um triângulo."
  }
}

function validaTriangulo(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

function verificaEquilatero(a, b, c) {
  return a === b && b === c;
}

function verificaIsosceles(a, b, c) {
  return a === b || b === c || c === a;
}
