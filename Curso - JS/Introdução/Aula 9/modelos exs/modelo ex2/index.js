function onButtonClick() {
  const numero1 = document.getElementById("input-numero-1");
  const numero2 = document.getElementById("input-numero-2");
  const resultado = document.getElementById("output-resultado-multiplicacao");

  resultado.value = resultadoMultiplicacao(Number(numero1.value), Number(numero2.value));
}

function resultadoMultiplicacao(numero1, numero2) {
  let resultado = 0;
  
  if (numero2 >= 0) {
    for (let i = 1; i <= numero2; i++) {
      resultado += numero1;
    }
  } else {
    for (let i = numero2; i < 0; i++) {
      resultado += -numero1;
    }
  }

  return resultado;
}