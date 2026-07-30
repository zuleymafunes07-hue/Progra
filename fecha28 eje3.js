import readline from "node:readline";

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese la longituda en metros: " , function(metros){
    let longitud = parseFloat(metros)

    let centimetros = longitud*100;

    console.log(`${longitud} metros equivale a ${centimetros}`)
})