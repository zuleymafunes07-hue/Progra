//Elabore un programa que solicite una cantidad de horas y muestre su equivalencia en minutos.

import readline from "node:readline";

// 2-CREAMOS INTERFAZ
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese la cantidad de horas: " , function(horas){
    
    const minutos =  Number(horas) * 60;

    console.log(`${horas} horas equivalentes a ${minutos} minutos`);

    rl.close();
    


})

