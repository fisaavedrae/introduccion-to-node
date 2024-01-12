import { registrar, leer } from "./operaciones.js";

const arg = process.argv.slice(2);
const [operacion, nombre, edad, tipo, color, enfermedad] = arg;

const main = async () => {
    //console.log(operacion, nombre, edad, tipo, color, enfermedad)
    if (operacion === "registrar") {
        let parametros = ""
        parametros = nombre + edad + tipo + color + enfermedad

        parametros ? await registrar(nombre, edad, tipo, color, enfermedad) : console.log('No se pudo registrar, faltan datos')
    } else if (operacion === "leer") {
        console.log(await leer())
    }
    else {
        console.log('La opcion ingresada no es valida')
    }
}

main();