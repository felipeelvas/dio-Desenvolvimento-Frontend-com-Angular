

//classes

/*
data motifiers
public
private
protected

*/
// class Character {
//     public name?: string;
//     readonly stregth: number;
//     skill: number;

//     constructor(name: string, stregth: number, skill: number){
//         this.name = name;
//         this.stregth = stregth;
//         this.skill = skill;
//     }

//     attack() : void{
//        console.log(`${this.name} Attack with ${this.skill} points`);
//     }
// }
// //Character: Superclass
// //Magician: subclass
// class Magician extends Character{
//     magicPoints: number;
//     constructor(
//         name: string, 
//         stregth: number, 
//         skill: number, 
//         magicPoints: number
//     ){
//     super(name, stregth, skill);
//     this.magicPoints = magicPoints;
//     }
// }

// const p1 = new Character("Naruto", 10, 98);
// const p2 = new Magician("Mago", 9, 30, 100)
// p1.attack();
// p2.attack();


/**generics */
// function concatArray<T>(...itens: T[]): T[] {
//     return new Array().concat(...itens);
//     }

//     const numArray = concatArray<number[]>([1, 5], [3]);
//     const stgArray = concatArray<string[]>(["Felipe", "Goku"], ["Vegeta"]);
   
//     console.log(numArray);
//     console.log(stgArray);

/**Trabalhando com TS Node Dev
let dado: string ="Felipe";
console.log(dado);*/

/**decorators */

//class decorators
// function apiVersion(version: string){
//     return (target: any) => {
//         Object.assign(target.prototype, { __version: version, __name: "felipe"})
//     }
// }

// @apiVersion("1.10")
// class Api {}

// const api = new Api();
// console.log(api.__name);

/**atribute decorator */
// function minLength(length: number){
//     return (target: any, key: string)=>{
//         let _value = target[key];

//         const getter = () => "[play]" + _value;
//         const setter = (value: string) => {
//             if (value.length < length) {
//                 throw new Error(`Tamanho menor do que ${length}`);
//             }else{
//                 _value = value;
//             }

//             Object.defineProperty(target, key, {
//                 get: getter,
//                 set: setter,
//             })
//         }
//     };
// }

// class Api {
//     @minLength(3)
//     name: string;

//     constructor(name: string){
//         this.name = name;
//     }
// }

// const api = new Api("usuario");
// console.log(api.name);

// function ExibirNome(target: any){
//     console.log(target);
// }

// @ExibirNome
// class Funcionario {}

// @ExibirNome
// class Quincas {}