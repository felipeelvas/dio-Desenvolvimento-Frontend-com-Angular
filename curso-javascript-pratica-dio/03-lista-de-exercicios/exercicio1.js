const nota1 = 7;
const nota2 = 9;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

const classificacao1 = 'Aluno Reprovado';
const classificacao2 = 'Aluno em Recuperação';
const classificacao3 = 'Aluno Aprovado';
if (media < 5) {
    console.log(classificacao1);
} else if(media >= 5 && media < 7) {
    console.log(classificacao2);
}else {
    console.log(classificacao3);
}