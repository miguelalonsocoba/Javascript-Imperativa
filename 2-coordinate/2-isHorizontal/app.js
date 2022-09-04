const { Console } = require("console-mpds");

const console = new Console();

const MESSAGE_ABCISA = "Dame la abcisa de la coordenada: ";
const MESSAGE_ORDENADA = "Dame la ordenada de la coordenada: ";

console.writeln("Coordenada origen:");
const abcisa = console.readNumber(MESSAGE_ABCISA);
const ordenada = console.readNumber(MESSAGE_ORDENADA);
console.writeln("Coordenada destino:");
const abcisaDestino = console.readNumber(MESSAGE_ABCISA);
const ordenadaDestino = console.readNumber(MESSAGE_ORDENADA);

const moveHorizontal = abcisaDestino >= abcisa && ordenadaDestino === ordenada ? `si ` : `no `;

console.writeln(`La coordenada (${abcisa}, ${ordenada}) y la coordenada destino (${abcisaDestino}, ${ordenadaDestino}) ${moveHorizontal} es un movimiento horizontal.`);