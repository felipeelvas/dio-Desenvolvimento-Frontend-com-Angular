"use strict";
const bot1 = {
    id: "1",
    name: "megaman",
};
const bot2 = {
    id: "1",
    name: "megaman",
    sayhello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayhello() {
        return `Hello I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Felipe");
console.log(p.sayhello());
