let numeroQualquer = 56;
let numeroAnterior1 = 1;
let numeroAnterior2 = 1;
let numeroAtual = numeroAnterior1 + numeroAnterior2;


while(numeroAtual <=  numeroQualquer)  {

    console.log(numeroAtual);

     numeroAnterior1 = numeroAnterior2;

    numeroAnterior2 = numeroAtual;

    numeroAtual = numeroAnterior1 + numeroAnterior2;
}


if (numeroAtual = numeroQualquer) {
    console.log('O número', numeroQualquer,  'faz parte da sequência de fibonacci');
} else {
    console.log('O número', numeroQualquer, 'não faz parte da sequência de fibonacci');
}