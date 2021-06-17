function onButtonClick() {
  // Seu código aqui
  const data = document.getElementById("input-data").value;
  const nome = document.getElementById("input-nome").value;
  const idade = document.getElementById("input-idade").value;
  const altura = document.getElementById("input-altura").value;
  
  const resultado = document.getElementById("output-formatado");
  const saidaFormatada = formataDados(data, nome, idade, altura);
  resultado.value = saidaFormatada
}

function formataDados(data, nome, idade, altura) {
  return `[ ${data} ] - Meu nome é ${nome}, tenho ${idade} anos e ${altura}m de altura.`;
}