"use strict";
// exports.__esModule = true;
console.log("Vinculado ao index.html");
// interface IEmployee {
//     code: number,
//     name: string,
// };
// const employee01: IEmployee ={
//     code: 10,
//     name: "John",
// }
// console.log()
// enum Profession {
//     Actress,
//     Baker
// }
// interface IPerson {
//     name: string,
//     age: number,
//     profession: Profession,
// }
// let person1: IPerson = {
//     name: 'Maria',
//     age: 29,
//     profession: Profession.Actress,
// };
// let person2: IPerson = {
//     name: "Roberto",
//     age: 19,
//     profession: Profession.Baker
// }
// let person3: IPerson = {
//     name: "Laura",
//     age: 32,
//     profession: Profession.Actress
// };
// let person4: IPerson = {
//     name: "Carlos",
//     age: 19,
//     profession: Profession.Baker
// }
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
