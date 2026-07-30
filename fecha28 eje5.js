// Elabore un programa que solicite al usuario una cantidad de dinero en dólares y el tipo de cambio actual del euro. 
// Convierta ambos valores a datos numéricos utilizando las funciones globales correspondientes. 
// Posteriormente, calcule la cantidad de euros que recibirá el usuario y muestre el resultado en pantalla. Un $1 es equivalente a 0.88e

import readline from "node:readline";

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese la cantidad de dinero en dolares que desea convertir: " , function(dinero){
    rl.question("ingrese ingrese el tipo de cambio actual del euro:" , function(cambio) {

        let cantDinero = parseFloat(dinero)
        let tipoCambio = parseFloat(cambio)

        let total = cantDinero * tipoCambio
        
        console.log(`la cantidad de euros que recibira es de $${total}`)

        rl.close();

    })
} 
)


