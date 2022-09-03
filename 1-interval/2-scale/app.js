const { Console } = require("console-mpds");

const console = new Console();

const initialInterval = console.readNumber("Introduce el mínimo del intervalo: ");
const finalInterval = console.readNumber("Introduce el máximo del intervalo (superior o igual al mínimo): ");
const scaleFactor = console.readNumber("Introduce un factor de escala positivo: ");

 const length = finalInterval - initialInterval;
 const midPoint = initialInterval + length / 2;

 console.writeln(`El intervalo [${initialInterval},${finalInterval}] con factor de escala ${scaleFactor} \
 es el intervalo [${midPoint - length / 2 + scaleFactor},${midPoint + length / 2 * scaleFactor}]`);