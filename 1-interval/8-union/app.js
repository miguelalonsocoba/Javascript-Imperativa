const { Console } = require("console-mpds");

const console = new Console();

const MESSAGE_INTERVAL_MINIMUM = "Introduce el mínimo del intervalo: ";
const MESSAGE_INTERVAL_MAXIMUM = "Introduce el máximo del intervalo: "

console.writeln("Primer intervalo:");
const firstIntervalMinimum = console.readNumber(MESSAGE_INTERVAL_MINIMUM);
const firstIntervalMaximum = console.readNumber(MESSAGE_INTERVAL_MAXIMUM);
console.writeln("Segundo intervalo:");
const secondIntervalMinimum = console.readNumber(MESSAGE_INTERVAL_MINIMUM);
const secondIntervalMaximum = console.readNumber(MESSAGE_INTERVAL_MAXIMUM);

const intervaloMinimo = firstIntervalMinimum <= secondIntervalMinimum ? firstIntervalMinimum : secondIntervalMinimum;
const intervaloMaximo = firstIntervalMaximum >= secondIntervalMaximum ? firstIntervalMaximum : secondIntervalMaximum;

console.writeln(`El intervalo [${firstIntervalMinimum},${firstIntervalMaximum}] intersección con el intervalo \
[${secondIntervalMinimum},${secondIntervalMaximum}] será el intervalo [${intervaloMinimo},${intervaloMaximo}]`);