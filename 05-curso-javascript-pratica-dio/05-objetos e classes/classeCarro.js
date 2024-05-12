// 1)Crie uma classe para representar carros.
// os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
//Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor
//gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaKm, precoCombustivel) {
        return (distanciaKm * this.gastoMedioPorKm) * precoCombustivel;        
    }  
   
}

const fusca = new Carro('Wolksvagem','vermelha',1/7);

console.log(fusca.calcularGastoDePercurso(70,5));

const gol = new Carro('Chevrolet', 'preta', 1/15);


console.log(gol.calcularGastoDePercurso(70,5));
