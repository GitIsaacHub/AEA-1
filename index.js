
require('colors')


console.log(process.argv);

const { crearalumne } = require("./helpers/alumne");

console.clear();

console.log(process.argv);

let nom = process.argv[2];
nom = nom.split('=');

let hores = process.argv[3];
hores = hores.split('=');

console.log(nom);
console.log(hores);

crearalumne(nom, hores);