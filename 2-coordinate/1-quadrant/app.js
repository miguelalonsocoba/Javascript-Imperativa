const { Console } = require("console-mpds");

const console = new Console();

const abcisa = console.readNumber("Dame la abcisa de la coordendad: ");
const ordenada = console.readNumber("Dame la ordenada de la coordenada: ");

const cuadrantEvaluation = abcisa >= 0 && ordenada >= 0 ? `1°` : `` || abcisa <=0 && ordenada >= 0 ? `2°` : `` || abcisa <= 0 && ordenada <= 0 ? `3°` : `` || abcisa >= 0 && ordenada <= 0 ? `4°` : ``;

console.writeln(`La coordenada (${abcisa}, ${ordenada}) está en el ${cuadrantEvaluation} cuadrante.`);