/** Variáveis *
 */

/**tipos primitivos: boolean, number, string */
let ligado: boolean = true;
let nome: String = "felipe";
let idade: number = 30;
let altura: number = 1.86;

/** tipos especiais: null, undefined */
let nulo: null = null;
let indefinido: undefined = undefined;

/**Tipos abrangentes: any, void */
let retorno: void;
function executaQuery(): void{}

let retornoView: any = ["felipe", 1, true];

/**object sem previsibilidade*/
let produto: object ={
    name: "felipe",
    cidade: "df",
    idade: 37
};
/**Objeto tipado - vom previsibilidade*/
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProdito: ProdutoLoja ={
    nome: "Tênis",
    preco: 89.99,
    unidades: 2,
};

/**
 * 
 * arrays
 */
let dados: string[] = ["felipe", "fabricio", "elvas"];
let dados2: Array<string> = ["1", "dois", "oi"]

let infos: (string | number)[] = ["felipe", 37, 2024]

/**
 * Tuplas
 */
let boleto:[string, number, number] = ["água", 199.90, 222222];

/**
 * Datas
 */
let aniversario:Date = new Date("2024-02-06 23:29");
console.log(aniversario.toString());