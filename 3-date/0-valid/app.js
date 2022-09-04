const { Console } = require("console-mpds");

const console = new Console();

const day = console.readNumber(`Dame el día: `);
const month = console.readNumber(`Dame el mes: `);
const year = console.readNumber(`Dame el año: `);

const validateDate = day >0 && day <= 31 && month > 0 && month <= 12 && year > 0 && year < 9999;

console.writeln(`La fecha ${day}/${month}/${year} ${validateDate ? `si` : `no`} es válida.`);