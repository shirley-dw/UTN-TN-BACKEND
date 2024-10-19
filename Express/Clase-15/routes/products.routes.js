import express from 'express';
import { ResponseBuilder } from '../builders/response.builder.js';
import filesystem from 'fs';

const productsRouter = express.Router();

// Función auxiliar para leer productos del archivo
const readProducts = async () => {
    const data = await filesystem.promises.readFile('data/products.json', { encoding: 'utf-8' });
    return JSON.parse(data);
};

// Ruta para obtener todos los productos activos
productsRouter.get('/', async (req, res) => {
    try {
        const products = await readProducts();
        const active_products = products.filter(product => product.active === true);
        if (active_products.length === 0) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setMessage('No se encontraron productos activos')
                .setPayload({ message: 'No se encontraron productos activos' })
                .build();
            return res.status(404).json(response);
        }
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Productos obtenidos')
            .setPayload({ products: active_products })
            .build();
        res.json(response);
    } catch (error) {
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Error interno del servidor')
            .setPayload({ message: error.message })
            .build();
        res.status(500).json(response);
    }
});

// Ruta para obtener un producto por ID
productsRouter.get('/:product_id', async (req, res) => {
    try {
        const products = await readProducts();
        const { product_id } = req.params;
        const producto_buscado = products.find(product => product.id === Number(product_id));
        if (!producto_buscado) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setMessage('No se encontró el producto')
                .setPayload({ product: null })
                .build();
            return res.status(404).json(response);
        }
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Producto obtenido')
            .setPayload({ product: producto_buscado })
            .build();
        res.json(response);
    } catch (error) {
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Error interno del servidor')
            .setPayload({ message: error.message })
            .build();
        res.status(500).json(response);
    }
});

// Ruta para eliminar un producto por ID
productsRouter.delete('/:product_id', async (req, res) => {
    try {
        const products = await readProducts();
        const { product_id } = req.params;
        const producto_buscado = products.find(product => product.id === Number(product_id));
        if (!producto_buscado) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setMessage('No se encontró el producto')
                .setPayload({ message: `No se encontró el producto con id: ${product_id}` })
                .build();
            return res.status(404).json(response);
        }
        if (producto_buscado.active === false) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setMessage('El producto ya fue eliminado')
                .setPayload({ message: `El producto con el id ${product_id} ya fue eliminado` })
                .build();
            return res.status(404).json(response);
        }
        producto_buscado.active = false;
        await filesystem.promises.writeFile('data/products.json', JSON.stringify(products, null, 2), { encoding: 'utf-8' });
        const products_active = products.filter(product => product.active === true);
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Producto eliminado')
            .setPayload({
                message: `Producto con id ${product_id} eliminado`,
                Mostrar_Productos_Activos: products_active
            })
            .build();
        res.json(response);
    } catch (error) {
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Error interno del servidor')
            .setPayload({ message: error.message })
            .build();
        res.status(500).json(response);
    }
});

productsRouter.post('/', async (req, res) => {
    try {
        const products = await readProducts();
        const { title, price, categoria, stock } = req.body;
        const new_product = {
            id: products.length + 1,
            title,
            price,
            categoria,
            stock,
            active: true
        };
        products.push(new_product);
        await filesystem.promises.writeFile('data/products.json', JSON.stringify(products, null, 2), { encoding: 'utf-8' });
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Producto creado')
            .setPayload({ message: 'Producto creado' })
            .build();
        res.json(response);
    } catch (error) {
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Error interno del servidor')
            .setPayload({ message: error.message })
            .build();
        res.status(500).json(response);
    }
})

/* productsRouter.put('/:product_id', async (req, res) => {
    try {
        const products = await readProducts();
        const { product_id } = req.params;
        const { title, price, stock, categoria } = req.body;
        const product_buscado = products.find(product => product.id === Number(product_id));
        if (!product_buscado) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setMessage('No se encontró el producto')
                .setPayload({ message: `No se encontró el producto con id: ${product_id}` })
                .build();
            return res.status(404).json(response);
        }
        product_buscado.title = title;
        product_buscado.price = price;
        product_buscado.stock = stock;
        product_buscado.categoria = categoria;
        await filesystem.promises.writeFile('data/products.json', JSON.stringify(products, null, 2), { encoding: 'utf-8' });
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Producto actualizado')
            .setPayload({ message: 'Producto actualizado' })
            .build();
        res.json(response);
    } catch (error) {
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Error interno del servidor')
            .setPayload({ message: error.message })
            .build();
        res.status(500).json(response);
    }
}) */
export default productsRouter;


/* CRUD DE PRODUCTOS

ROUTE: /api/products

Method: GET
Endpoint: / 
Accion: obtenerProductos
Buscar en products.json el array de productos con active = true y devolverlo

Response:
{
    ok: true,
    status: 200,
    message: 'Productos Obtenidos'
    payload: {
        products: [Lista De Productos]
    }
}


Method: GET
Endpoint: /:product_id
obtenerProductoPorId
Buscar en products.json el producto con id igual al id recibido por parametro de busqueda y devolverlo

Response:
{
    ok: true,
    status: 200,
    message: 'Producto Obtenido',
    payload: {
        product: {producto}
    }
}

Sino lo encuentra:

Response:
{
    ok: true,
    status: 404,
    message: 'No se encontro el producto',
    payload: {
        product: null
    }
}

Method: POST
Endpoint: /
crearProducto
Van a recibir por body:
{
    title: 'nuevo tv',
    price: 3000,
    categoria: 'TECNOLOGIA',
    stock: 2
}
y deberar agregarlo a products.json y devolver la lista de productos actualizada
Si todo esta bien responder:
Response:
{
    ok: true,
    status: 201,
    message: 'Producto Creado',
    payload: {
        products: [nueva lista con el producto agregado]
    }
}

posibles errores:
- El producto ya existe, ya existe un producto con el mismo title STATUS: 400
- El enviado no tiene los campos necesarios STATUS: 400 (opcional: especificar los campos faltantes)
- El stock es negativo STATUS: 400
- El stock no es un numero STATUS: 400
- El precio no es un numero STATUS: 400
- El precio es negativo STATUS: 400
- El title no es un string STATUS: 400
- El title es vacio STATUS: 400
- La categoria no es un string valido o no es una de las categorias existentes STATUS: 400 (OPCIONAL categorias_existentes: 'ropa', 'electrodomestico', 'jugueteria')        
- Error de lectura de archivo STATUS: 500



Method: PUT

Endpoint: /:product_id
actualizarProductoPorId

Van a recibir por body:
{
    title: 'nuevo nombre tv',
    price: 2000,
    stock: 2,
    propiedad_falsa: true,
    nombre: 'pepe'
}

//SOLO PUEDEN ACTUALIZARSE las propiedades: title, price, stock y categoria


y deberemos modificarlo al producto por id en products.json y devolver la lista de productos actualizada

POSIBLES ERRORES:

- Las propiedades recibidas deben ser validas, significa que no podemos recibir una propiedad que no existe Status: 400 (opcional: especificar las propiedades validas y la que esta/an mal)
Ejemplo:

{
    status: 400,
    message: 'Las propiedades no son validas'
    payload: {
        message: 'Las propiedades no son validas. Propiedades validas: title, price, stock, categoria, invalidas: propiedad_falsa, nombre'
    }
},

- El producto ya existe, ya existe un producto con el mismo title en la lista (excepcion: se vale si el producto quiere mantener el titulo anterior) STATUS: 400
Ejemplo: si mi lista tiene 'Tv Samsung' y quiero actualizar a 'Tv Samsung' al valor 'Tv Samsung' me va a dejar hacerlo

- El producto enviado debe tener almenos una propiedad (valida) STATUS: 400
- Si hay stock, y el stock es negativo o no es un numero STATUS: 400
- Si hay precio y no es un numero o es negativo STATUS: 400
- Si hay title y no es un string o es vacio STATUS: 400
- La categoria no es un string valido o no es una de las categorias existentes STATUS: 400 (OPCIONAL categorias_existentes: 'ropa', 'electrodomestico', 'jugueteria')        
- Error de lectura de archivo STATUS: 500


COMO SABER SI HAY PROPIEDADES INVALIDAS?

const producto = {
    title: 'nuevo nombre tv',
    price: 2000,
    stock: 2,
    propiedad_falsa: true,
    nombre: 'pepe',
    teclado: true
}

const PROPIEDADES_VALIDAS = ['title', 'price', 'stock']
const propiedades_invalidas = []

for(let propiedad in producto){
    if(!PROPIEDADES_VALIDAS.includes(propiedad)){
        propiedades_invalidas.push(propiedad)
    }
}

console.log(propiedades_invalidas)

Response:
{
    ok: true,
    status: 201,
    payload: {
        product: {producto modificado}
    }
}

Method: DELETE
Endpoint: /:product_id
eliminarProducto
Cambiar el active del producto a false en products.json y devolver la lista de productos actualizada
Response:
{
    ok: true,
    status: 200,
    message: 'Producto eliminado',
    payload: {
        message: 'Producto eliminado'
    }
} 
Si no encuentra el producto:
Response:
{
    ok: true,
    status: 404,
    message: 'No se encontro el producto',
    payload: {
        message: 'No se encontro el producto'
    }
} */



