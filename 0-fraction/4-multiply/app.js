const { Console } = require(`console-mpds`);

const console = new Console();

console.writeln(`Primera fracción:`);
const firstNumerator = console.readNumber(`Introduce el numerador de la fracción: `);
const firstDenominator = console.readNumber(`Introduce el denomindador de la fracción: `);

console.writeln(`Segunda fracción:`);
const secondNumerator = console.readNumber(`Introduce el numerador de la fracción: `);
const secondDenominator = console.readNumber(`Introduce el denomindador de la fracción: `);

const newNumerator = firstNumerator * secondNumerator;
const newDenominator = firstDenominator * secondDenominator;

console.writeln(`La multiplicación de la fracción ${firstNumerator}/${firstDenominator} y la fracción \
${secondNumerator}/${secondDenominator} es la fracción ${newNumerator}/${newDenominator}`);
