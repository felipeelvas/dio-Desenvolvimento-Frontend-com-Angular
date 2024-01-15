// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto,
// considerando preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de 
// pagamento escolhida e efetuar o calcolo adequado.

// Código Condição de pagamento:
// 1 - ;
// 2 - Á vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 100;
const formaPagamento = 3;
// const formaPagamento2 = 2;
// const formaPagamento3 = 3;
// const formaPagamento4 = 4;

if (formaPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta* 0.1) );
}else if (formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else  {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}