const fs = require('fs');
const file = 'mensaje.txt';
const text = 'Hola, mundo';

fs.writeFileSync(file, text, { encoding: 'utf-8' });
console.log('Archivo escrito exitosamente');

//Pruebas y practicas de programacion con Node.js