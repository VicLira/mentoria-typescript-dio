// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

// SOLUÇÃO -------------------

enum Profession {
    Actress,
    Baker
}

interface IPerson {
    name: string,
    age: number,
    profession: Profession,
}

let person1: IPerson = {
    name: 'Maria',
    age: 29,
    profession: Profession.Actress,
};

let person2: IPerson = {
    name: "Roberto",
    age: 19,
    profession: Profession.Baker
}

let person3: IPerson = {
    name: "Laura",
    age: 32,
    profession: Profession.Actress
};

let person4: IPerson = {
    name: "Carlos",
    age: 19,
    profession: Profession.Baker
}