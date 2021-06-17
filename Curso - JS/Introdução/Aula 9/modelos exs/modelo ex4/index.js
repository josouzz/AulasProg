const listaDeNumeros = [];

// function onButtonClick() {
//   const numeroDigitado = document.getElementById("input-numero-1");
//   listaDeNumeros.push(Number(numeroDigitado.value))

//   exibeListaNaTela();
//   exibeListaImpares();
// }

// function exibeListaNaTela() {
//   const numerosDigitados = document.getElementById("output-numeros-digitados");
//   numerosDigitados.value = listaDeNumeros.join(', ');
// }

// function exibeListaImpares() {
//   const numerosDigitadosImpares = document.getElementById("output-numeros-impares");
//   const numerosImpares = listaDeNumeros.filter((numero) => numero % 2 === 1);
//   numerosDigitadosImpares.value = numerosImpares.join(', ');
// }

function onButtonClick() {
  const numeroDigitado = document.getElementById("input-numero-1");
  if (listaDeNumeros.length < 2) {
    listaDeNumeros.push(Number(numeroDigitado.value));
  } 

  const numerosEntre = exibeListaNaTela();
  exibeListaImpares(numerosEntre);
}

function exibeListaNaTela() {
  const numerosDigitados = document.getElementById("output-numeros-digitados");
  const numerosEntre = [];
  if (listaDeNumeros[0] < listaDeNumeros[1]) {
    for (let i = listaDeNumeros[0]; i <= listaDeNumeros[1]; i++) {
      numerosEntre.push(i);
    }
  } else {
    for (let i = listaDeNumeros[1]; i <= listaDeNumeros[0]; i++) {
      numerosEntre.push(i);
    }
  }

  numerosDigitados.value = numerosEntre.join(', ');
  return numerosEntre;
}

function exibeListaImpares(intervalo) {
  const numerosDigitadosImpares = document.getElementById("output-numeros-impares");
  const numerosImpares = intervalo.filter((numero) => numero % 2 === 1);
  numerosDigitadosImpares.value = numerosImpares.join(', ');
}