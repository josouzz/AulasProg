
const texto = "Joao";
let texto1 = new Array();
for (let i = 0; i < texto.length; i++) {
  texto1.push(texto[i]);
}

function analiseDeTexto() {
  let quantasVogais = 0;
  for (let i = 0; i < texto1.length; i++) {
    if (
      texto1[i] === "a" ||
      texto1[i] === "A" ||
      texto1[i] === "e" ||
      texto1[i] === "E" ||
      texto1[i] === "i" ||
      texto1[i] === "I" ||
      texto1[i] === "o" ||
      texto1[i] === "O" ||
      texto1[i] === "u" ||
      texto1[i] === "U"
    ) {
      quantasVogais = quantasVogais + 1;
    }
  }
  return quantasVogais;
}
analiseDeTexto();
console.log(analiseDeTexto());
console.log(
  ` "${texto}" possui ${texto.length} letras e ${analiseDeTexto()} vogal`
);
