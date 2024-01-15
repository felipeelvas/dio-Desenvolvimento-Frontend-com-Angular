

const pessoa = {
    nome: 'Felipe E Barbosa',
    idade: 37,

    descrever: function() {
        console.log('Meu nome é: ' + this.nome + ' e minha idade é: ' +this.idade);
    }
}
 pessoa['nome'] = 'teste';  //acessando dinamicamente os valores de um objeto
 pessoa.nome = 'teste'; //acesso direto ao objeto


const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']);
pessoa.descrever = function () {
    console.log('Meu nome é: ' + this.nome);
}

// pessoa.nome = 'Renan';
// pessoa.idade = 30;

pessoa.descrever();