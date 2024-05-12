
// //CONCEITOS BÁSICOS SOBRE FUNÇÕES AULA 01
function incrementoJuros(valor, percentualJuros){
    const valorAcrescimo = ((percentualJuros / 100) * valor );

    return valor + valorAcrescimo;
    }
    
    console.log(incrementoJuros(100,10));
    console.log(incrementoJuros(100,15));
    console.log(incrementoJuros(100,20));



function quadrado(valor){
return valor * valor;
}

console.log(quadrado(10) + quadrado(10));

const quadradoDeDez = quadrado(20);
console.log(quadradoDeDez);


function sayMyName(name){
    console.log('Your name is: ' + name)
}
sayMyName("felipe");

// // function teste(){
// // console.log('teste');
// // }

// // teste();
// // teste();

// // COMO ORGANIZAR AS FUNÇÕES?
// // function main(){
// //     console.log('Programa Principal');
// // }
// // main();

// function calcularImc(peso,altura) {
//     return peso / Math.pow(altura,2);
// }
// function classificarImc(imc) {
//     if (imc < 18.5) {
//         return'Abaixo do peso';
//     } else if (imc >= 18.5 && imc < 25 ) {
//         return'Peso normal';
//     }else if (imc >= 25 && imc < 30 ) {
//         return'Acima do peso';
//     } else if (imc >= 30 && imc < 40 ) {
//         return'Obeso';
//     }else {
//         return'Obesidade Grave';
//     }
// }

// (function () {
//     const peso = 69;
// const altura = 1.72;

// const imc = calcularImc(peso,altura);
// console.log(classificarImc(imc));
// })();

// function main() {
//     const peso = 63;
// const altura = 1.75;

// const imc = calcularImc(peso,altura);
// console.log(classificarImc(imc));
// }
// main();

// (function main() {
//     const peso = 63;
// const altura = 1.75;

// const imc = calcularImc(peso,altura);
// console.log(classificarImc(imc));
// })();

// console.log(main);

// const main2 = main;
// main2();

// main = function(){
//     console.log(1);
// }

// main();



const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);







