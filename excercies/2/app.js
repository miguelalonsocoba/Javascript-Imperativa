const { Console } = require("console-mpds");

const console = new Console();

const age = console.readNumber("Dame tu edad: ");
const previus  = age - 1;
const next = age + 1;
let prefix = `E`;

if(age > 0)
    prefix += `l año pasado tenias ${previus} años${previus !== 1 ? `s` : ``} y e`;
console.writeln(`${prefix}l año que vienen tendras ${next} año${next !== 1 ? `s` : ``}`);   