const { Console } = require("console-mpds");

const console = new Console();

const SIMETRIC = -1;

const firstIntervale = console.readNumber("Introduce el mínimo del intervalo: ");
const secondIntervale = console.readNumber("Introduce el máximo del intervalo: ");

console.writeln(`El intervalo ${firstIntervale}, ${secondIntervale} simétrico al origen es [${secondIntervale * SIMETRIC},\
 ${firstIntervale * SIMETRIC}]`);