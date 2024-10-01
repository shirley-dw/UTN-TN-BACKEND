import { ProductsManager } from "./productManager.js";
import { crearJson, leerJson } from "./utils/filesystemManager.js";


export const checkFiles = async () => {
    try {
        await leerJson('counters')
        console.log('El archivo counters.json existe!')
    } catch (error) {
        console.error('El archivo counters no existe! se creara uno inicializandolo en 0')
        await crearJson('counters', { products: 0 })
    }
    try {
        await leerJson('products')
        console.log('El archivo products.json existe!')
    } catch (error) {
        console.error('El archivo products no existe! se creara uno inicializandolo en []')
        await crearJson('products', [])
    }
}


await ProductsManager.createProduct('Iphone 13', "usado condicion 90%",560)
await ProductsManager.getProducts()