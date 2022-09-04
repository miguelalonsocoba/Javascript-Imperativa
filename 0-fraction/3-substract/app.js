const { Console } = require(`console-mpds`);

const console = new Console();

console.writeln(`Primera fracción`);
const firstNumerator = console.readNumber(`Introduce el numerador de la fracción: `);
const firstDenominator = console.readNumber(`Introduce el denominador de la fracción:`);

console.writeln(`Segunda fracción`);
const secondNumerator = console.readNumber(`Introduce el numerador de la fracción: `);
const secondDenominator = console.readNumber(`Introduce el denominador de la fracción:`);

const subtractionNumerator = firstNumerator*secondDenominator - firstDenominator*secondNumerator
const subtractionDenominator = firstDenominator*secondDenominator;

console.writeln(`La resta de la fracción ${firstNumerator}/${firstDenominator} y la fraccion \
${secondNumerator}/${secondDenominator} es la fracción ${subtractionNumerator}/${subtractionDenominator}`);