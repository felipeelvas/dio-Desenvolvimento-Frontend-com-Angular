
<<<<<<< HEAD
const precoEtanol = 3.79;
const precoGasolina = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;
const tipoCombustivel = 'Gasolina';
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === 'Etanol') {
	const valorViagem = litrosConsumidos * precoEtanol;
	console.log(valorViagem.toFixed(2))
}else {
	const valorViagem = litrosConsumidos * precoGasolina;
	console.log(valorViagem.toFixed(2));

}




=======
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

>>>>>>> f0bd62cca9adc6455f0d0c1388fcf0d81f244e0a
