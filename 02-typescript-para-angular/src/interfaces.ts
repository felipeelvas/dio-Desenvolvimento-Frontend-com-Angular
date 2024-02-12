/**
 * Interfaces (type x interface)
 */
type robot = {
    readonly id:number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string,
    name: string;
    sayhello(): string;

}

const bot1: robot = {
    id: "1",
    name: "megaman",
};

const bot2: robot2 = {
    id: "1",
    name: "megaman",
    sayhello: function (): string {
        throw new Error("Function not implemented.");
    }
};

// console.log(bot1);
// console.log(bot2);

//quando usar interfaces
class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
    }
    sayhello(): string {
        return `Hello I'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Felipe")
console.log(p.sayhello());
