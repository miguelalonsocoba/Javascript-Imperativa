const { Console } = require("console-mpds");

const console = new Console();

const phrase = console.readString("Give me a phrase: ");

const evaluation = "";
let index = 0;
while (phrase[index] <= phrase.length) {
    evaluation += phrase[index] === "a" || phrase[index] === "e" || phrase[index] === "i" || phrase[index] === "o" || phrase[index] === "u" ? phrase[index] : "";
    index++;
}

console.writeln(`The vowels that appear are ${evaluation}`);