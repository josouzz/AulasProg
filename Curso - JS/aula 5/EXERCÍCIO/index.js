
// PARA SEXTA FEIRA!

/*
 * 1) Percorram a lista listaDeValores e, para cada elemento, multiplique o esse elemento pelo próximo da lista.
 * Note que: ao chegar no final da lista, não há um próximo elemento. Nesse caso, multiplique o último elemento pelo primeiro.
 * Salve os resultados das multiplicações num outro array e no final do programa, imprima a lista final na tela.
 */



//DEU CERTO, MAS ACHO Q DAVA PRA TER FEITO MELHOR
/*
const listaDeValores = [100, 123, 44, 77, 59, 129, -54, -334, 2, 0];
let listaDeMultiplicacao = new Array();

for (i = 0; i < listaDeValores.length; i++){
 if (i < listaDevalores.length){
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
for (let i = 0; i < texto.length - 1; i++) {
       texto1.push(texto[i]);

}

function analisedetexto() {
    let quantasVogais = 0
    for (i = 0; i < texto1.length; i++){
        if(texto1[i] === 'a' || texto1[i] === 'A' || texto1[i] === 'e' || texto1[i] === 'E' || texto1[i] === 'i'||
        texto1[i] === 'I' || texto1[i] === 'o' || texto1[i] === 'O' || texto1[i] === 'u' || texto1[i] === 'U') {
            quantasVogais = quantasVogais + 1;
        }
        return quantasVogais
    }
    
}

analisedetexto();
console.log(analisedetexto())
console.log(` "${texto}" possui ${texto.length} letras e ${analisedetexto()} vogal`)
 

