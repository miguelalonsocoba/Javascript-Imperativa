const { Console } = require("console-mpds");

const console = new Console();

const abcisa = console.readNumber("Dame la abcisa de la coordenada: ");
const ordenada = console.readNumber("Dame la ordenada de la coordenada: ");

const evaluation = abcisa === 0 ? `está en el eje de abcisas` : `` || ordenada === 0 ? `está en el eje de ordenadas` : `` || abcisa !== 0 && ordenada !== 0 ? `no está en ningun eje` : `` || abcisa === 0 && ordenada === 0 ? `está en el eje de abcisas y de ordenadas` : ``;

console.writeln(`La coordenada (${abcisa}, ${ordenada}) ${evaluation}`);