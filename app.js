const {crearArchivo} = require('./helpers/multiplicar');
const argv = require("./config/yargs");

require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h).then((nombrearchivo) => console.log(nombrearchivo.rainbow, "creado"))
                .catch((error) => console.log(error));

/*const [ , ,arg3 = "--base=5"] = process.argv;
const [ ,base = 5] = arg3.split('=');*/


//const base = 5;

