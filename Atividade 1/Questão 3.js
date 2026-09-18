let entrada = prompt("Digite um número inteiro:");
let num = Number(entrada);
if (!Number.isInteger(num)) {
    console.log("Valor inválido. Digite um número inteiro.");
} else {

    if (num > 0) {
        console.log("O número é positivo.");
    } else if (num < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }

    let parOuImpar = Math.abs(num) % 2 === 0 ? "par" : "ímpar";
    console.log("O número é " + parOuImpar + ".");

    let primo = true;

    if (num <= 1) {
        primo = false;
    } else if (num === 2) {
        primo = true;
    } else if (num % 2 === 0) {
        primo = false;
    } else {
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        console.log("O número é primo.");
    } else {
        console.log("O número não é primo.");
    }
}