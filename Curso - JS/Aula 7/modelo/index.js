function onInputChange() {
  const texto = document.getElementById("input-texto").value.toLowerCase();
  
  let qtdVogais = 0;
  let qtdLetras = 0;

  const vogais = [97, 101, 105, 111, 117];
  
  for (let letra = 0; letra < texto.length; letra++) {
    if (texto[letra].charCodeAt(0) >= 97 && texto[letra].charCodeAt(0) <= 122) {
      qtdLetras += 1;
    }

    for (let vogal = 0; vogal < vogais.length; vogal++) {
      if (texto[letra].charCodeAt(0) === vogais[vogal]) {
        qtdVogais += 1;
      }
    } 
  }

  document.getElementById("input-vogais").value = qtdVogais;
  document.getElementById("input-letras").value = qtdLetras;

}