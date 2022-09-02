const { Console } = require("console-mpds");

const console = new Console();

const MESSAGE_NUMERATOR = "Introduce el numerador de la fracción: ";
const MESSAGE_DENOMINATOR = "Introduce el denomindador de la fracción: ";

console.writeln("Primera fracción:");
const firstNumerator = console.readNumber(MESSAGE_NUMERATOR);
const firstDenominator = console.readNumber(MESSAGE_DENOMINATOR);

console.writeln("Segunda fracción:");
const secondNumerator = console.readNumber(MESSAGE_NUMERATOR);
const secondDenominator = console.readNumber(MESSAGE_DENOMINATOR);

const newNumerator = firstNumerator * secondNumerator;
const newDenominator = firstDenominator * secondDenominator;

console.writeln(`La multiplicación de la fracción ${firstNumerator}/${firstDenominator} y la fracción \
${secondNumerator}/${secondDenominator} es la fracción ${newNumerator}/${newDenominator}`);
