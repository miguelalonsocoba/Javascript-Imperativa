const { Console } = require("console-mpds");

const console = new Console();

const initialInterval = console.readNumber("Introduce el mínimo del intervalo: ");
const finalInterval = console.readNumber("Introduce el máximo del intervalo: ");
const shifted = console.readNumber("Introduce un factor de desplazamiento: ");

console.writeln(`El intervalo [${initialInterval},${finalInterval}] con factor de desplazamiento ${shifted} es el intervalo [${initialInterval + shifted},${finalInterval + shifted}]`);