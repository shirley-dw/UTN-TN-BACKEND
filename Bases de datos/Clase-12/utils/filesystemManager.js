import filesystem from 'fs'
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

export {crearJSON, leerJSON} 


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


