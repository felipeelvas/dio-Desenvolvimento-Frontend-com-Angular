//funções
function addNumber(x:number, y: number): number{
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}
console.log(addToHello("Felipe"));

let soma: number = addNumber(3, 7);
console.log(soma);

function CallToPhone(phone: number | string): number | string {  
    return phone;
}
console.log(CallToPhone("11993456652"));

async function getDataBase(id:number): Promise<number | string> {
    return "felipe";
    
}
