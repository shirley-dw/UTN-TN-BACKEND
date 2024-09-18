const filesystem = require('fs'); //libreria para leer y escribir archivos


const createTxt = (file_name, text) => {

    const file = file_name + '.txt'

    filesystem.writeFileSync(file, text, {encoding: 'utf-8'})

}
createTxt('prueba', 'Hola mundo')


module.exports = {createTxt: createTxt} //Hago un objeto exportable, module es una palabra global que hace referencia a un modulo