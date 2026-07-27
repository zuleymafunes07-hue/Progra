//Elabore un programa que solicite el nombre de un producto, su precio unitario y la cantidad comprada. 
// Luego, calcule el total que debe pagar el cliente.

import readline from "node:readline";

// 2-CREAMOS INTERFAZ
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el nombre del produto:" ,function(nombre){
    rl.question("Ingrese el precio unitario del producto:" , function(precio){
        rl.question("Ingrese la cantidad del producto:" ,function(cantidad) {

            const total = Number(cantidad) * Number(precio)

            console.log(`el total a pagar por ${nombre} es de $ ${total} dolares`);

            rl.close();

        })
    })
})