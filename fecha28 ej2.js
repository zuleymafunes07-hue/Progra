import readline from "node:readline";

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese el precio del producto:" , function(precio){
    rl.question("ingrese el porcentaje de descuento" , function(descuento){
    
        let precioProducto=parseFloat(precio)
        let porcentaje = parseFloat(descuento)

        console.log(`El precio final de el producto es : ${precioProducto - (precioProducto * (descuento / 100))}`);

            rl.close

    });
})