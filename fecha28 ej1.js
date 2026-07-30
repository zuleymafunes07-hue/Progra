import readline from "node:readline";

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese el nombre del empleado:" , function(nombre){
    rl.question("ingrese las horas trabajadas:" , function(horas){
        rl.question("ingrese el pago por hora:" , function(pago){

            let horasTrabajadas = parseInt(horas);
            let pagoHoras =  parseFloat(pago);

            let salario = horasTrabajadas * pagoHoras;

        console.log("\n--- salario semanal");
        console.log(`Empleado: ${nombre}`);
        console.log(`salario semanal: $${salario.toFixed(2)}`);

        rl.close();

        })
    })
})


