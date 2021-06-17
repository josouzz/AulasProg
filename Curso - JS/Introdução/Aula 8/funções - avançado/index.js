// Function Expression
const resultadoMultiplicacao = function (num1, num2) {

}
// Arrow Functions
const imprimeTela = (data, nome) => {
  console.log(`Data: ${data}`);
  console.log(`Nome: ${nome}`);
};

// imprimeTela(new Date(), "Jefferson");

// Function Declaration + Recursividade

// V1 

// let resto = 0;
// let quociente = 0;
// function resultadoDivisao(dividendo, divisor) {
//   if (dividendo - divisor >= 0) {
//     quociente++;
//     return resultadoDivisao(dividendo - divisor, divisor);
//   } else {
//     resto = dividendo;
//     return {quociente, resto};
//   }
// }

// console.log(resultadoDivisao(12, 4));

// V2 
function resultadoDivisao(dividendo, divisor, quociente = 0, resto = 0) {
  if (dividendo - divisor >= 0) {
    quociente = quociente + 1;
    return resultadoDivisao(dividendo - divisor, divisor, quociente, resto);
  } else {
    resto = dividendo;
    return { quociente, resto };
  }
}

console.log(resultadoDivisao(12, 4));