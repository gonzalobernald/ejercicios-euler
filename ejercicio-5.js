/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

function dividirEspecialEjercicioCinco(valorLimite, numeroInicial, valoresChequeo) {
    let acumulador = numeroInicial;
    for (let i = valoresChequeo; i <= valorLimite; i++) {
        if (acumulador % i === 0) {
            continue
        } else {
            i = valoresChequeo - 1;
            acumulador++;
        }
    }
    return acumulador;
}

console.log(dividirEspecialEjercicioCinco(20, 20, 2));
function demostracion() {
    for (let i = 2; i <= 20; i++) {
        console.log(232792560 % i);
    }
}
