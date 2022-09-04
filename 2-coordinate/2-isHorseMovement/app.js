
const { Console } = require("console-mpds");

const console = new Console();

const LIMIT_BOARD = 8;

console.writeln(`Coordenada origen:`);
const abcisa = console.readNumber(`Dame la abcisa de la coordenada: `);
const ordenada = console.readNumber(`Dame la ordenada de la coordenada: `);
console.writeln(`Coordenada destino:`);
const abcisaDestino = console.readNumber(`Dame la abcisa de la coordenada: `);
const ordenadaDestino = console.readNumber(`Dame la ordenada de la coordenada: `);

const validationMove = abcisaDestino === abcisa+1 && ordenadaDestino === ordenada+2 || abcisa === abcisaDestino+1 && ordenadaDestino === ordenada+2 || abcisa === abcisaDestino+1 && ordenada === ordenadaDestino+2 || abcisaDestino === abcisa+1 && ordenada === ordenadaDestino+2 || abcisaDestino === abcisa+2 && ordenadaDestino === ordenada+1 || abcisa === abcisaDestino+2 && ordenadaDestino === ordenada+1 || abcisa === abcisaDestino+2 && ordenada === ordenadaDestino+1 || abcisaDestino === abcisa+2 && ordenada === ordenadaDestino+1;
const validationLimits = abcisaDestino<=LIMIT_BOARD && abcisaDestino>0 && ordenadaDestino<=LIMIT_BOARD && ordenadaDestino>0;

console.writeln(`La coordenada origen (${abcisa}, ${ordenada}) y la coordenada destino (${abcisaDestino}, ${ordenadaDestino}) \
${validationMove && validationLimits ? `si` : `no`} es un movimiento del caballo.`);