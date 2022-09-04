const { Console } = require(`console-mpds`);

const console = new Console();

const numerator = console.readNumber(`Introduce el numerador de la fraccion: `);
const denominator = console.readNumber(`Introduce el denominador de la fraccion: `);
const exponential = console.readNumber(`Introduce un exponente: `);

console.writeln(`La fraccion ${numerator}/${denominator} elevado a ${exponential} es la fraccin ${numerator ** exponential}/${denominator ** exponential}`);