let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

if (
    Number.isNaN(nota1) ||
    Number.isNaN(nota2) ||
    Number.isNaN(nota3)
) {
    console.log("Uma ou mais notas são inválidas.");
} else {

    let media = (
        nota1 * peso1 +
        nota2 * peso2 +
        nota3 * peso3
    ) / (peso1 + peso2 + peso3);

    console.log("Média ponderada: " + media.toFixed(2));

    if (media >= 7) {
        console.log("Aprovado!");
    } else if (media >= 5) {
        console.log("Recuperação.");

        let exame = Number(prompt("Digite a nota do exame:"));

        if (Number.isNaN(exame)) {
            console.log("Nota do exame inválida.");
        } else {

            // Calcula a nova média
            let novaMedia = (media + exame) / 2;

            console.log("Nova média: " + novaMedia.toFixed(2));

            if (novaMedia >= 6) {
                console.log("Aprovado após a recuperação!");
            } else {
                console.log("Reprovado após a recuperação.");
            }
        }

    } else {
        console.log("Reprovado.");
    }
}