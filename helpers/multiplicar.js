const fs = require("fs");

const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = "";
        let consola = "";

        for(let i = 0; i <= hasta; i++){
            salida += `${base} x ${i} = ${5*i} \n`;
            consola += `${base} ${"x".green} ${i} ${"=".green} ${5*i} \n`;
        }

        if(listar){
            console.log("=================".green);
            console.log('Tabla del: '.green, colors.blue(base));
            console.log("=================".green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

    /*return new Promise((resolve, reject) => {
        console.log("=================");
        console.log('Tabla del: ', base);
        console.log("=================");

        let salida = "";

        for(let i = 0; i <= 10; i++){
            salida += `${base} * ${i} = ${5*i} \n`;
        }

        console.log(salida);

        /*fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
            if (error) throw error;

            console.log(`tabla-${base}.txt creado`);
        });*/

        /*fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    });*/
}

module.exports = {
    crearArchivo
}