const { Console } = require("console-mpds");

const console = new Console();

const MESSAGE_INTERVAL_MINIMUM = "Introduce el mínimo del intervalo: ";
const MESSAGE_INTERVAL_MAXIMUM = "Introduce el máximo del intervalo (superior o igual al mínimo): "

console.writeln("Primer intervalo:");
const firstIntervalMinimum = console.readNumber(MESSAGE_INTERVAL_MINIMUM);
const firstIntervalMaximum = console.readNumber(MESSAGE_INTERVAL_MAXIMUM);
console.writeln("Segundo intervalo:");
const secondIntervalMinimum = console.readNumber(MESSAGE_INTERVAL_MINIMUM);
const secondIntervalMaximum = console.readNumber(MESSAGE_INTERVAL_MAXIMUM);

const evaluationOne = secondIntervalMinimum >= firstIntervalMinimum && secondIntervalMinimum <= firstIntervalMaximum && secondIntervalMaximum >= firstIntervalMaximum ? `${secondIntervalMinimum}/${firstIntervalMaximum}` : ``;
const evaluationTwo = secondIntervalMaximum >= firstIntervalMinimum && secondIntervalMaximum <= firstIntervalMaximum && secondIntervalMinimum <= firstIntervalMinimum ? `${firstIntervalMinimum}/${secondIntervalMaximum}` : ``; 
const evaluationThree = firstIntervalMinimum <= secondIntervalMinimum && firstIntervalMaximum >= secondIntervalMaximum ? `${secondIntervalMinimum}/${secondIntervalMaximum}` : ``;
const evaluationFour = secondIntervalMinimum <= firstIntervalMinimum && secondIntervalMaximum >= firstIntervalMaximum ? `${firstIntervalMinimum}/${firstIntervalMaximum}` : ``;

const concatEvaluation = evaluationOne + evaluationTwo + evaluationThree + evaluationFour;
console.writeln(`El intervalo [${firstIntervalMinimum}, ${firstIntervalMaximum}] intersección con el intervalo [\
${secondIntervalMinimum}, ${secondIntervalMaximum}] ${concatEvaluation === `` ? `no tiene intersección` : concatEvaluation}`);