let preco = Number(prompt("Digite o preço do produto:"));
let vip = prompt("O cliente é VIP? (sim/não)").toLowerCase();
let cupom = prompt("Digite o cupom, caso possua:");
let parcelas = Number(prompt("Em quantas vezes deseja parcelar?"));

if (
    Number.isNaN(preco) ||
    Number.isNaN(parcelas) ||
    preco <= 0 ||
    parcelas < 1
) {
    console.log("Dados inválidos.");
} else {

    let total = preco;

    if (vip === "sim") {
        total = total * 0.80;
        console.log("Desconto VIP de 20% aplicado.");
    } else if (total > 150) {
        total = total * 0.90;
        console.log("Desconto de 10% aplicado.");
    }

    if (cupom === "PROMO10") {
        total = total * 0.90;
        console.log("Cupom PROMO10 aplicado.");
    }

    let imposto = total * 0.12;
    let totalComImposto = total + imposto;

    if (parcelas > 3) {
        totalComImposto = totalComImposto * 1.02;
        console.log("Acréscimo de 2% aplicado.");
    }

    let valorParcela = totalComImposto / parcelas;

    console.log("-------------------------");
    console.log("Preço original: R$ " + preco.toFixed(2));
    console.log("Imposto: R$ " + imposto.toFixed(2));
    console.log("Preço final: R$ " + totalComImposto.toFixed(2));
    console.log("Parcelas: " + parcelas);
    console.log("Valor de cada parcela: R$ " + valorParcela.toFixed(2));
    console.log("Tipo do preço final: " + typeof totalComImposto);
}