//Classe é a definição do que deve ser aquele objeto
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){ // é o que acontece quando uma Pessoa é instaciada
      this.nome = nome;
      this.idade = idade;
      this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log('Meu nome é: ' + this.nome + ' e minha idade é: ' +this.idade);

    }

}

//Instancia é uma ocorrência daquele objeto
const felipe = new Pessoa('Felipe', 37);
// felipe.nome = 'Felipe E Barbosa';
// felipe.idade = 37;


const renan = new Pessoa('Renan', 30);
// renan.nome = 'Renan J Paula';
// renan.idade = 30;

// felipe.descrever();
// renan.descrever();
console.log(felipe);