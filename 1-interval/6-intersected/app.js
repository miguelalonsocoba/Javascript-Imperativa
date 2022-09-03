const { Console } = require("console-mpds");

const console = new Console();

const MESSAGE_INTERVAL_MINIMUM = "Introduce el mínimo del intervalo: ";
const MESSAGE_INTERVAL_MAXIMUM = "Introduce el máximo del intervalo (superior o igual al minimo): ";
console.writeln("Primer intervalo:");
const firstIntervalMinimum = console.readNumber(MESSAGE_INTERVAL_MINIMUM);
const firstIntervalMaximum = console.readNumber(MESSAGE_INTERVAL_MAXIMUM);
console.writeln("Segundo intervalo:");
const secondIntervalMinimum = console.readNumber(MESSAGE_INTERVAL_MINIMUM);
const secondIntervalMaximum = console.readNumber(MESSAGE_INTERVAL_MAXIMUM);

const intersected = `${secondIntervalMinimum >= firstIntervalMinimum && secondIntervalMinimum <= firstIntervalMaximum || secondIntervalMaximum >= firstIntervalMinimum && secondIntervalMinimum <= firstIntervalMaximum ? `si intersecta con el intervalo` : `no intersecta con el intervalo`}`;

console.writeln(`El intervalo [${firstIntervalMinimum}, ${firstIntervalMaximum}] ${intersected} [${secondIntervalMinimum}, ${secondIntervalMaximum}]`);