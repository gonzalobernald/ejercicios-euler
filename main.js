 function calcularFactoresPrimos (numero){
    const divisores =[];
    for (let i = 2; i<numero;i++) {
        if (numero%i===0){
            divisores.push(i);
        } else {
            continue;
        }
    }

};
calcularFactoresPrimos(100);

