const { Console } = require("console-mpds");

const console = new Console();

const message = console.readString("¿Dame un mensaje terminado en \".\":");
const i = 0;

while (message[i] !== ".")
    i++;
console.writeln(`Your message ${message} has ${}`);