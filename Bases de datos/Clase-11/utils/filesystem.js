const filesystem = require('fs'); //Importa el módulo (file system) de Node.js, proporciona una API para interactuar con el sistema de archivos.

/* 
//Metodo sincrono
const createTxt = (file_name, text) => { //Desestructuracion
    const file = file_name + '.txt'
    filesystem.writeFileSync(file, text, {encoding: 'utf-8'})
}
createTxt('prueba', 'Hola pepe') 


//Metodo asincrono
const createTxt = (file_name, text) => { //Desestructuracion
    const file = file_name + '.txt'
    filesystem.promises.writeFile(file, text, {encoding: 'utf-8'}, () => { //Ejecuto con un callback
        console.log('Archivo creado exitosamente') 
    })
} */

//Cuando coloco async en el parametro de la funcion retornara una promesa
const createTxt = async (file_name, text) => { //Desestructuracion
    const file = file_name + '.txt'

    await filesystem.promises.writeFile(file, text, { encoding: 'utf-8' })
    let textoGuardado = await filesystem.promises.readFile(file, text, { encoding: 'utf-8' })
    console.log('Archivo creado exitosamente' +  textoGuardado)

    
}
module.exports = { createTxt } //Hago un objeto exportable, module es una palabra global que hace referencia a un modulo


/*
1) La función writeFileSync del módulo fs en Node.js se utiliza para escribir datos en un archivo de manera sincrónica. 
    Esto significa que el programa se detendrá hasta que la operación de escritura se complete.

2) Module variable global al la cual puedo acceder desde cualquier sistema .export lo utilizo para exportar la función


*/