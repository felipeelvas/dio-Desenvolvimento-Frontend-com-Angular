/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, Sendo elas:
1- Preço do combustível;
2- Gasto médio do combustível do carro por KM;
3- Distãncia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoCombustivel = 5.79;

const kmPorLitros = 12;

const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorViagem = litrosConsumidos * precoCombustivel;


console.log(valorViagem.toFixed(2));