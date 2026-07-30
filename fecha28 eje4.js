// Elabore un programa que solicite al usuario el precio unitario de un producto y la cantidad que desea comprar.
//  Convierta ambos datos utilizando las funciones globales correspondientes. 
// Posteriormente, calcule el total a pagar por la compra y muestre el resultado en pantalla.

import readline from "node:readline";

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
}); 

rl.question("Ingrese el precio unitario del producto:" , function(precio){
    rl.question("ingrese la cantidad que desea comprar:" , function(cantidad){

        let precioProducto = parseFloat(precio)
        let cantidadProd = parseInt(cantidad)

        let total = precioProducto * cantidadProd

        console.log(`el tota a pagar por la compra es de $ ${total} dolares`)
        
        rl.close();
    })
})
