/* Arrays e estruturas de Repetição javaScript */

// const alunos =['João','Maria','Vitor'];
// alunos.push('Renan');
// alunos[3] = 'Vinícius';
// console.log(alunos);

/*A minha lista també pode começar vazia: */

// const alunos =[];
// alunos.push('teste');
// alunos.push(10);

// console.log(alunos);



// const alunos =['1','2','3'];

// console.log(alunos);

// console.log(alunos.pop());

// console.log(alunos);

/* Lista das notas do aluno com enfase na sua média */

const notas = [];

notas.push(5);
notas.push(10);
notas.push(7);
notas.push(8);
notas.push(10);
notas.push(10);

let soma = 0;
    for(let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        soma = soma + nota;        
    }
    const media = soma / notas.length;

console.log(media);
// console.log(soma / 5);
// const nome = 'Vitor Johansen Guerra';

// for(let i = 0; i < nome.length; i++) {

//     console.log(nome[i]);}


  
