import {crearJSON, leerJSON} from './utils/filesystemManager.js';

const test = async () => {
    await crearJSON('data', 'hola')
    /* await leerJSON('data') */
}
test()

console.log()
