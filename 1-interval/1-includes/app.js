const { Console } = require("console-mpds");

const console = new Console();

const inicioIntervalo = console.readNumber("Introduce el mínimo del intervalo: ");
const finalIntervalo = console.readNumber("Introduce el máximo del intervalo (superior o igual al mínimo): ");
const punto = console.readNumber("Introduce un punto: ");

console.writeln(`El intervalo [${inicioIntervalo}, ${finalIntervalo}]\
${punto >= inicioIntervalo && punto <= finalIntervalo ? ` si incluye` : ` no incluye`} el punto ${punto}`);