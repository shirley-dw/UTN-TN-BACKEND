import { ProductManager } from "./ProductManager.js";
import { crearJson, leerJson } from "./utils/filesystemManager.js";

export const checkFiles = async () => {
    try {
        await leerJson('counters');
        console.log('El archivo counters.json ya existe');
    } catch (error) {
        console.error('El archivo counters no existe, se creara un nuevo archivo inicializandolo en 0');
        await crearJson('counters', { products: 0 });
    };
    try {
        await leerJson('products');
        console.log('El archivo products.json existe!');
    } catch (error) {
        console.error('El archivo products.json no existe');
        await crearJson('products', []);
    };
};



await ProductManager.getProducts();

export default checkFiles;