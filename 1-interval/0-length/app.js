const { Console } = require(`console-mpds`);

const console = new Console();

const intervalStart = console.readNumber(`Introudce el mínimo del intervalo: `);
const intervalEnd = console.readNumber(`Introudce el máximo del intervalo (superior o igual al ultimo): `);

console.writeln(`${intervalStart > intervalEnd ? `Error. El intervalo mayor (${intervalEnd}) \
debe ser mayor o igual al intervalo menor (${intervalStart}).` : `La longitud del intervalo \
[${intervalStart}, ${intervalEnd}] es ${intervalEnd - intervalStart}`}`);