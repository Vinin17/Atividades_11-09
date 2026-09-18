//QUESTÃO 2
let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));
Number.isNaN(a)
if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Digite números válidos.");
}
let soma = a + b;
let diferenca = a - b;
let produto = a * b;
let divisao;
if (b === 0) {
    divisao = "Não é possível dividir por zero";
} else {
    divisao = a / b;
}
let resto = a % b;
if (a > b) {
    console.log("O primeiro é maior");
} else if (b > a) {
    console.log("O segundo é maior");
} else {
    console.log("Os dois são iguais");
}
console.log(typeof soma);
console.log(typeof diferenca);
console.log(typeof produto);