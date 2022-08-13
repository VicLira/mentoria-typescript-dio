// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// SOLUÇÃO -----------

interface IEmployee {
    code: number,
    name: string,
};

const employee01: IEmployee = {
    code: 10,
    name: "John"
}
