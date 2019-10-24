//requirds
const fs = require('fs'); /* nativo de nodejs */
//const fs = require('express'); /* no nativo de nodejs */
//const fs = require('./fs'); /* creados por nosotros */
const color = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        console.log('==================='.green);
        console.log(` tabla de ${base} `.green);
        console.log('==================='.green);
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
            console.log(`${base} * ${i} = ${base*i}`);
        }
        resolve('ok');
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
            console.log(`${base} * ${i} = ${base*i}`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err); //throw err;
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });

}


module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
}