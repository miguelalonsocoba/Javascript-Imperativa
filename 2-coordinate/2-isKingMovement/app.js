const { Console } = require("console-mpds");

const console = new Console();

console.writeln("Coordenada origen:");
const MESSAGE_ABCISA = "Dame la abcisa de la coordenada: ";
const MESSAGE_ORDENADA = "Dame la ordenada de la coordenada: ";
const abcisa = console.readNumber(MESSAGE_ABCISA);
const ordenada = console.readNumber(MESSAGE_ORDENADA);
console.writeln("Coordenada destino:");
const abcisaDestino = console.readNumber(MESSAGE_ABCISA);
const ordenadaDestino = console.readNumber(MESSAGE_ORDENADA);

const evaluationCaseOne = abcisaDestino === abcisa + 1 && ordenadaDestino === ordenada; 
const evaluationCaseTwo = abcisaDestino === abcisa && ordenadaDestino === ordenada + 1;
const evaluationCaseThree = abcisaDestino + 1 === abcisa && ordenadaDestino === ordenada +1;
const evaluationCaseFour = abcisaDestino === abcisa + 1 && ordenadaDestino === ordenada + 1;

const resultaEvaluation = evaluationCaseOne || evaluationCaseTwo || evaluationCaseThree || evaluationCaseFour ? `si` : `no`;

console.writeln(`La coordenada (${abcisa}, ${ordenada}) y la coordenada destino (${abcisaDestino}, ${ordenadaDestino}) ${resultaEvaluation} es un movimiento del rey.`);