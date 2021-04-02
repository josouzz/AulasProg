let a = 2;
let b = 4;
let c = -5;

let delta = (Math.pow(b,2) - (4*a*c));

let raíz1 = -(b + Math.sqrt(delta))/(2*a);
let raíz2 = -(b - Math.sqrt(delta))/(2*a);

if (delta>0) {
    console.log("Existem duas raízes diferentes e Reais, são elas: ", raíz1, " e ", raíz2);
} 
else if (delta===0) {
    console.log("Existem duas raízes Reais e iguais, são elas: ", raíz1);
    }
else {
    console.log("A equação de segundo grau não possui raízes pertencentes ao conjunto dos números Reais");
}