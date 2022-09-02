const { Console } = require("console-mpds");

const console = new Console();

const MENSAJE_NUMERADOR = "Introduce el numerador de la fracción: ";
const MENSAJE_DENOMINADOR = "Introduce el denominador de la fracción:";

console.writeln("Primera fracción");
const primerNumerador = console.readNumber(MENSAJE_NUMERADOR);
const primerDenominador = console.readNumber(MENSAJE_DENOMINADOR);
console.writeln("Segunda fracción");
const segundoNumerador = console.readNumber(MENSAJE_NUMERADOR);
const segundoDenominador = console.readNumber(MENSAJE_DENOMINADOR);
const restaNumerador = primerNumerador * segundoDenominador - primerDenominador * segundoNumerador
const restaDenominador = primerDenominador * segundoDenominador;

console.writeln(`La resta de la fracción ${primerNumerador}/${primerDenominador} y la fraccion \
${segundoNumerador}/${segundoDenominador} es la fracción ${restaNumerador}/${restaDenominador}`);