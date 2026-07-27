import readline from "node:readline";

// 2-CREAMOS INTERFAZ
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

    rl.question("Ingrese la primera nota:" , function(nota1){
        rl.question("ingrses la segunda nota:" , function(nota2){
            rl.question("ingrese la tercera nota:" , function(nota3){

                nota1 = number(nota1)
                nota2 = number(nota2)
                nota3 = number(nota3)

                const promedio = (nota1 + nota2 + nota3)/3

                console.log(`El promedio de las tres notas es de ${promedio}`);
                rl.close()
            })
        })
    })