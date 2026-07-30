// Elabore un programa que solicite al usuario un dato cualquiera. 
// Convierta el valor ingresado utilizando la función global parseFloat(). 
// Posteriormente, utilice la función global isNan() para verificar si el dato ingresado corresponde a un número.
//El dato ingresado por el usuario. El resultado obtenido al utilizar parseFloat().  El valor retornado por isNan().

import readline from "node:readline";

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese un dato cualquiera:" , function(dato){

    let datoIngresado = parseFloat(dato)

    if (isNaN(datoIngresado)) {
    console.log("El dato ingresado no es un número.");
} else {
    console.log("El número ingresado es válido.");
}
 console.log(`el dato ingresad por el usuario es ${dato} el resultado obtenido de parseFloat es ${datoIngresado} t el valor de isNaN es ${isNaN(datoIngresado)}`);
 rl.close();
});