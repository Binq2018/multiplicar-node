/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
*/
const argv = require('./config/yargs.js').argv;
const color = require('colors');
//const multiplicar = require('./multiplicar/multiplicar.js');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
//let base = 'asfd';
/*
console.log(crearArchivo);
console.log(process.argv);

let argv2 = process.argv;

console.log(argv.base);
console.log(argv.limite);
console.log(argv);
*/
/*
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);


*/



let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(respuesta => console.log(respuesta))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}