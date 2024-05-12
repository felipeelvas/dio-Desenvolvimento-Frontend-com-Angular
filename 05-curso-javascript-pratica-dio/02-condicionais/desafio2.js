
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




