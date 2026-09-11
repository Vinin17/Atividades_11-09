//QUESTÃO 1
let valorCompra = Number(prompt("Digite o valor da compra:"));
let vip = prompt("Você é cliente VIP? (sim/não)");
if (vip === "sim") {
    // desconto VIP
}
let cupom = prompt("Digite o cupom, caso tenha:");
if (cupom === "PROMO10") {
    // desconto de 10%
}
let parcelas = Number(prompt("Em quantas vezes deseja parcelar?"));
let precoFinal = valorCompra;
if (vip === "sim") {
    precoFinal = precoFinal * 0.80;
}
if (vip !== "sim" && valorCompra > 150) {
    precoFinal = precoFinal * 0.90;
}
if (parcelas > 3) {
    precoFinal = precoFinal * 1.02;
}
let valorParcela = precoFinal / parcelas;
console.log(precoFinal.toFixed(2));

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

//QUESTÃO 3