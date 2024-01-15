import { registrar, leer } from "./operaciones.js";

const arg = process.argv.slice(2);
const [operacion, nombre, edad, tipo, color, enfermedad] = arg;

const main = async () => {
    if (operacion === "registrar") {
        let parametros = ""
        parametros = nombre + edad + tipo + color + enfermedad
        parametros ? await registrar(nombre, edad, tipo, color, enfermedad) : console.log(' No se pudo registrar, faltan datos')
    } else if (operacion === "leer") {
        const citas = await leer()
        if (citas.length == 0) {
            //Al ejecutar la funcion leer desde la linea de comando debe validar si no hay citas (arreglo vacio) y dar un mensaje
            console.log(' No hay citas registradas')
        } else {
            console.log('\n************** Citas registradas ************** \n')
            citas.map(cita => {
                //en caso de haber citas mostrar procesando los datos individuales de cada objeto del arreglo
                console.log(" Nombre      : " + cita.nombre)
                console.log(" Edad        : " + cita.edad)
                console.log(" Tipo        : " + cita.tipo)
                console.log(" Color       : " + cita.color)
                console.log(" Enfermedad  : " + cita.enfermedad)
                console.log("\n---------------------------\n")

            }
            )
            console.log('*********************************************** \n')
        }
    }
    else {
        //Al intentar ejecutar la funcion debe validarse que sea correcto o adecuado el nombre de la funcion desde la linea de comando
        console.log(' La opcion ingresada no es valida')
    }
}

main();