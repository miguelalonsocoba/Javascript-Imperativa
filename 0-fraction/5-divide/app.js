const { Console } = require(`console-mpds`);

const console = new Console();

console.writeln(`Primera fracción:`);
const firstNumerator = console.readNumber(`Introduce el numerador de la fracción: `);
const firstDenominator = console.readNumber(`Introduce el denominador de la fracción`);

console.writeln(`Segunda fracción`);
const secondNumerator = console.readNumber(`Introduce el numerador de la fracción: `);
const secondDenominator = console.readNumber(`Introduce el denominador de la fracción`);

const newNumerator = firstNumerator * secondDenominator;
const newDenominator = firstDenominator * secondNumerator;

console.writeln(`La división de la fracción ${firstNumerator}/${firstDenominator} y la fracción \
${secondNumerator}/${secondDenominator} es la fracción ${newNumerator}/${newDenominator}`);
