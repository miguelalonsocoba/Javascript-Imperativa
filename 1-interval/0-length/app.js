const { Console } = require("console-mpds");

const console = new Console();

const inicioIntervalo = console.readNumber("Introudce el mínimo del intervalo: ");
const finalIntervalo = console.readNumber("Introudce el máximo del intervalo (superior o igual al ultimo): ");
console.writeln(`La longitud del intervalo [${inicioIntervalo}, ${finalIntervalo}] es ${finalIntervalo - inicioIntervalo}`);
