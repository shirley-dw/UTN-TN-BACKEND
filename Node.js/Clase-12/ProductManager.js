import { checkFiles } from "./index.js";
import { crearJson, leerJson } from "./utils/filesystemManager.js";

class ProductManager {
    static async createProduct(name, description, price) {
        try {
            this.validateProductData(name, description, price);
            await checkFiles();
            const countersRead = await leerJson('counters');
            let id = countersRead.products;
            await crearJson('counters', { products: id + 1 });
            const newProduct = {
                id: id + 1,
                name,
                description,
                price,
            };
            let productsRead = [];
            try {
                productsRead = await leerJson('products');
                console.log('El archivo products.json fue leído!');
            } catch (error) {
                console.error('El archivo products no existe!');
            }
            productsRead.push(newProduct);
            await crearJson('products', productsRead);
            console.log('El producto se ha creado con éxito');
            return newProduct;
        } catch (error) {
            this.handleError(error);
        }
    }

    static async updateProduct(id, name, description, price) {
        try {
            this.validateProductData(name, description, price);
            await checkFiles();
            if (typeof id !== 'number') {
                throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'El id debe ser un número' };
            }
        } catch (error) {
            console.log('Error no hay producto con el id ' + id);
        }
    }

    static async deleteProduct(id) {
        try {
            await checkFiles();
            if (typeof id !== 'number') {
                throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'El id debe ser un número' };
            }
            let products = await leerJson('products');
            const updatedProducts = products.filter(product => product.id !== id);
            if (updatedProducts.length === products.length) {
                console.error('No se encontró el producto con el id ' + id);
            } else {
                await crearJson('products', updatedProducts);
                console.log(`Se ha eliminado el producto con el id ${id} con éxito`);
            }
        } catch (error) {
            console.error('Error al eliminar el producto', error);
        }
    }

    static async getProducts() {
        try {
            await checkFiles();
            console.log('*** Lista de productos completa ***');
            const products = await leerJson('products');
            console.table(products);
        } catch (error) {
            console.error('Error al obtener la lista de productos', error);
            return [];
        }
    }

    static async getProductById(id) {
        try {
            await checkFiles();
            if (typeof id !== 'number') {
                throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'El id debe ser un número' };
            }
            const products = await leerJson('products');
            const product = products.find(product => product.id === id);
            if (!product) {
                console.error('No se encontró el producto con el id ' + id);
            } else {
                console.log('*** Detalle del producto con el id ' + id + ' ***');
                console.log(product);
            }
        } catch (error) {
            console.error('Error al obtener el producto', error);
        }
    }

    static validateProductData(name, description, price) {
        if (typeof name !== 'string' || name.length === 0) {
            throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'El nombre del producto debe ser un string y no puede estar vacío' };
        }
        if (typeof description !== 'string' || description.length === 0) {
            throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'La descripción del producto debe tener al menos un carácter' };
        }
        if (typeof price !== 'number' || price <= 0) {
            throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'El precio del producto debe ser un número positivo' };
        }
    }

    static handleError(error) {
        if (error.code === 'ERR_INVALID_ARG_TYPE') {
            console.error(error.detail);
        } else {
            console.error('Error inesperado', error);
        }
    }
}



export { ProductManager };