import readline from "node:readline";

// 2-CREAMOS INTERFAZ
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("ingrse la base del rectangulo:" , function(base){
    rl.question("ingrese la altura del rectangulo:" , function(altura){

        const area = Number(base) * Number(altura);

        console.log(`El area del rectangulo es: ${area}`);
        rl.close();
    })
})