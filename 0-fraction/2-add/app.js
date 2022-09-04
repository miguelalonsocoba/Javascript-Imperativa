const { Console } = require(`console-mpds`);

const console = new Console();

console.writeln(`First fraction:`);
const firstNumerator = console.readNumber(`Introduce el numerador de la fraccion: `);
const firstDenominator = console.readNumber(`Introduce el denominador de la fraccion: `);

console.writeln(`Second fraction:`);
const secondNumerator = console.readNumber(`Introduce el numerador de la fraccion: `);
const secondDenominator = console.readNumber(`Introduce el denominador de la fraccion: `);

const additionNumerator = firstNumerator*secondDenominator + secondNumerator*firstDenominator;
const additionDenominator = firstDenominator*secondDenominator;

console.writeln(`La suma de la fraccion ${firstNumerator}/${firstDenominator} y la fraccion ${secondNumerator}/${secondDenominator} \
es la fraccion ${additionNumerator}/${additionDenominator}`);