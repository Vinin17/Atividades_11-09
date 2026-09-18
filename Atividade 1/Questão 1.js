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

