import { readFile, writeFile } from "node:fs/promises";

export async function registrar(nombre = "", edad = "", tipo = "", color = "", enfermedad = "") {
    const citas = await leer();
    citas.push({ nombre, edad, tipo, color, enfermedad });
    try {
        await writeFile('./citas.json', JSON.stringify(citas));
    }
    catch (error) {
        console.log(error);
    }

}

export async function leer() {
    try {
        return JSON.parse(await readFile('./citas.json', "utf-8"));
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

