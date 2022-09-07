const { Console } = require("console-mpds");

const console = new Console();

const number = console.readNumber("Escribe un numero: ");
let parity = "impar";d
if (number % 2 === 0)
    parity = "par";
console.writeln(`El numero ${number} es ${parity}`);