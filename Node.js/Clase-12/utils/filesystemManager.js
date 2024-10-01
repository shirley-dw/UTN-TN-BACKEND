//Importo el modulo (file system) de Node.js, proporciona una API para interactuar con el sistema de archivos.
import filesystem from 'fs';

const crearJson = async (fileName, data) => {
    try{
        if(!fileName || !data || typeof fileName !== 'string' || typeof data !== 'object'){
            throw {code: 'ERR_INVALID_ARG_TYPE', detail: 'El nombre del archivo debe ser un string y el contenido debe ser un objeto'}
    }
    if(!data || typeof data !== 'object'|| data === null){
        throw {code: 'ERR_INVALID_ARG_TYPE', detail: 'El contenido del archivo debe ser un objeto'}
        await filesystem.promises.writeFile(`${fileName}.json`, JSON.stringify(data), {encoding: 'utf-8'})
        console.log('El archivo ' + fileName + ' fue creado con exito')
    }
    }

    catch(error){
        if(error.code === 'ERR_INVALID_ARG_TYPE'){
            console.error(error.detail)
        }else{
            throw error
        }
    }
}


const leerJson = async (name) => {
    try{
        const nameJSON = name + '.json'
        const content = await filesystem.promises.readFile(nameJSON, {encoding: 'utf-8'} )
        const dataJSON = JSON.parse(content)
        console.log(dataJSON)
        return dataJSON
}

    catch(error){
        console.error(`No se encontro ningun archivo con el nombre ${name}.json`)
        throw error
    }
}


export {crearJson,leerJson}

/* import filesystem from 'fs'
 //Crear la siguiente funcion
const crearJSON = async (file_name, content) =>{
    try{
        const nameJSON = file_name + '.JSON'
        await filesystem.promises.writeFile(`${file_name}.JSON`, JSON.stringify(content), {encoding: 'utf-8'})
        console.log('El archivo ' + nameJSON + ' fue creado con exito')
    }catch(error){
        console.error('Ocurrio un error al crear el archivo ' + error)
    }
}

const leerJSON = async (file_name) =>{
    const nameJSON = file_name + '.JSON'
    const content = await filesystem.promises.readFile(nameJSON, {encoding: 'utf-8'} )
    console.log('El contenido del archivo ' + nameJSON + ' es: ' + content) 

}

export {crearJSON, leerJSON}  */
/* 
    Crear una clase llamada JSONFileManager que tendra 2 metodos estaticos
    crearJson
    leerJson
    class ProductsManager {
    static productCategories = {
        "TECNOLOGY": "TECNOLOGY",
        "HOME": "HOME",
        "OFFICE": "OFFICE"
    }
    static async createProduct(){     
    } 
    static async deleteProduct(){
      
    } 
}

ProductsManager.createProduct()
ProductsManager.deleteProduct()
ProductsManager.productCategories
    
*/
/* 

import filesystem from 'fs'

//crar archivo
//filesystem.promises.writeFile(fileName, data, {encoding: 'utf-8'} )
//leer archivos
//filesystem.promises.readFile(fileName, {encoding: 'utf-8'})


//Crear la sig funcion
const crearJson = async (fileName, data) => {
    try{
        if(!fileName){
            throw {code: 'ERR_INVALID_ARG_TYPE', detail:  'Falta fileName en crearJson, se esperaba un dato verdadero pero recibio ' + fileName}
        }
        if(!data){
            throw {code: 'ERR_INVALID_ARG_TYPE', detail: 'Falta data en crearJson, se esperaba un dato verdadero pero recibio ' + data}
        }
        await filesystem.promises.writeFile(`./public/${fileName}.json`, JSON.stringify(data), { encoding: 'utf-8' });
        console.log(`Archivo ${fileName}.json creado con éxito.`);
    }
    
  
/* const ERRORES = {
    'ERR_INVALID_ARG_TYPE': {
        detail: 'argumentos invalidos',
        fn: () => {
            Envio de ticket al slack reportes
        }
    },
    'ERROR_GENERICO': {
        
    }
}
 */


/* 
Crear un archivo llamado counters.json usando la funcion crearJson, counters.json sera un objeto con el sig formato
{
    products: 0
}

Crear un ProductManager
debe ser una clase con los metodos estaticos:
createProduct
updateProduct
deleteProduct
getProducts
getProductById

Debe manejarse con persistencia de datos con filesystem usando las funciones de utilidad creadas en filesystemManager.js. Los productos se pueden guardar en un archivo llamado products.json

Se debe tener en cuenta que al crear un producto se recibira titulo, descripcion y precio, el id se le asignara automaticamente usando un contador que debe persistir en el archivo json llamado counters.json. Obviamente al crear un producto el contador se debe actualizar en el archivo counters.json y se debe guardar

REGLAS:
-No se puede modificar los archivos usando filesystem, siempre deberemos usar la funcion crearJson o leerJson
-No puede crashear la aplicacion, los errores deben estar manejados
-Los parametros de cada funcion deben estar validados y en caso de no estar deberan tener sus propios throws

*/ 

