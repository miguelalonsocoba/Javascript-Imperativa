const { Console } = require("console-mpds");

const console = new Console();

const MESSAGE_NUMERATOR = "Introduce el numerador de la fraccion: ";
const MESSAGE_DENOMINATOR = "Introduce el denominador de la fraccion: ";
console.writeln("First fraction:");
const firstNumerator = console.readNumber(MESSAGE_NUMERATOR);
const firstDenominator = console.readNumber(MESSAGE_DENOMINATOR);

console.writeln("Second fraction:");
const secondNumerator = console.readNumber(MESSAGE_NUMERATOR);
const secondDenominator = console.readNumber(MESSAGE_DENOMINATOR);

const sumaNumerator = firstNumerator * secondDenominator + secondNumerator * firstDenominator;
const sumaDenominator = firstDenominator * secondDenominator;

console.writeln(`La suma de la fraccion ${firstNumerator}/${firstDenominator} y la fraccion ${secondNumerator}/${secondDenominator} \
es la fraccion ${sumaNumerator}/${sumaDenominator}`);