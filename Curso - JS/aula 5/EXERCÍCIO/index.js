
// PARA SEXTA FEIRA!

/**
 * 1) Percorram a lista listaDeValores e, para cada elemento, multiplique o esse elemento pelo próximo da lista.
 * Note que: ao chegar no final da lista, não há um próximo elemento. Nesse caso, multiplique o último elemento pelo primeiro.
 * Salve os resultados das multiplicações num outro array e no final do programa, imprima a lista final na tela.
 */



//DEU CERTO, MAS ACHO Q DAVA PRA TER FEITO MELHOR
/*
const listaDeValores = [100, 123, 44, 77, 59, 129, -54, -334, 2, 0];
let listaDeMultiplicacao = new Array();

for (i = 0; i < 10; i++){
 if (i < 9){
     listaDeMultiplicacao.push( listaDeValores[0+i] * listaDeValores[1+i] );
}else{
    listaDeMultiplicacao.push(0);
}
}
console.log(listaDeMultiplicacao)
*/



// MANEIRA Q DEU ERRADO 
//for (let i = 0; i < listaDeValores.length; i++) {
//if (i < listaDeValores.length) {
//    listaDeMultiplicacao[i] = { posicao: i, valor: listaDeValores[i].valor + listaDeValores[i++].valor };
//} else {
//    listaDeMultiplicacao[10] = 0 
//}
//console.log(listaDeMultiplicacao[i])
//}



// 2) Dada uma palavra inserida pelo usuário (vocês, no caso) imprima na tela a quantidade de letras dessa palavra e a 
// quantidade de vogais.
  
  
const texto = "um texto qualquer";
let texto1 = new Array()
//for (let i = 0; i < texto.length; i++) {
//    console.log(texto[i]);
//    texto1.push(texto[i])
//
//}

function analisedetexto() {
    let quantasVogais = 0
    for (i = 0; i < texto.length; i++){
        if(texto[i] === 'a' || texto[i] === 'A' || texto[i] === 'e' || texto[i] === 'E' || texto[i] === 'i'||
        texto[i] === 'I' || texto[i] === 'o' || texto[i] === 'O' || texto[i] === 'u' || texto[i] === 'U') {
            quantasVogais++
        }
        return quantasVogais
    }
    
}

analisedetexto();
console.log(analisedetexto())
console.log(` "${texto}" possui ${texto.length} letras e ${analisedetexto()} vogal`)
 



