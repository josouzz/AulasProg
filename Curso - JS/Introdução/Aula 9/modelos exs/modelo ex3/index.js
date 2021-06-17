function onButtonClick() {
  const numero1 = document.getElementById("input-numero-1");
  const numero2 = document.getElementById("input-numero-2");
  const resultadoInteiro = document.getElementById("output-resultado-divisao-inteira");
  const resultadoFracionario = document.getElementById("output-resultado-divisao-fracionaria");

  if (Number(numero2.value) === 0) {
    return;
  } else {
    const resultado = resultadoDivisao(Number(numero1.value), Number(numero2.value));
    resultadoInteiro.value = resultado.quociente;
    resultadoFracionario.value = resultado.resto;
  }

}

function resultadoDivisao(dividendo, divisor, quociente = 0, resto = 0) {
  if (dividendo - divisor >= 0) {
    quociente = quociente + 1;
    return resultadoDivisao(dividendo - divisor, divisor, quociente, resto);
  } else {
    resto = dividendo;
    return { quociente, resto };
  }
}
