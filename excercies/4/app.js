const { Console } = require("console-mpds");

const console = new Console();

const number = console.readNumber("Escribe un numero: ");
let absolute = number;
if (number < 0)
    absolute *= -1;
console.writeln(`El valor absoluto del numero ${number} es ${absolute}`);