const { Console } = require("console-mpds");

const console = new Console();

const numerator = console.readNumber(`Introduce el numerador de la fraccion: `);
const denominator = console.readNumber(`Introduce el denominador de la fraccion: `);

console.writeln(`La fraccion invertida de ${numerator}/${denominator} es la frgitaccion ${denominator}/${numerator}`);