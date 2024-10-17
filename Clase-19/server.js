import express from "express";
import {engine} from "express-handlebars"; // Desestructuro el metodo engine de express-handlebars


// Engine es una instancia de express-handlebars se utiliza para generar los templates

const app = express();
const PORT = 3000;

app.use(express.static("./public")); // Para que el servidor sepa donde buscar los archivos estaticos

app.engine("handlebars", engine()); // Defino el motor de plantillas handlebars

app.set("view engine", "handlebars"); // Defino el motor de plantillas a utilizar
app.set("views", "./views"); // Defino la carpeta donde se encuentran los archivos de plantillas

app.use(express.urlencoded({extended: true}));
/* Middleware para indicarle a mi backend que cuando reciba consultas que tengan 
content-type : 'application/www.url-enconded', lo decodifique y se transforme en el body de mi request */
const productos = [
    {
        id: 1,
        nombre: 'tv noblex',
        precio: 4000,
        descripcion: 'Una tv que se puede usar para ver canales',
        categorias: ['tecnologia', 'hogar', 'futbol'],
        stock: 4,
        active: true
    },
    {
        id: 2,
        nombre: 'Pc escritorio dell',
        precio: 6000,
        descripcion: 'Una PC cumplidora',
        categorias: ['tecnologia', 'computacion', 'office'],
        stock: 2,
        active: true
    },
    {
        id: 3,
        nombre: 'Laptop MSI',
        precio: 10000,
        descripcion: 'Una laptop apta para todo.',
        categorias: ['tecnologia', 'computacion', 'gaming', 'office'],
        stock: 7,
        active: true
    }
]
// Get de un producto
app.get('/product/detail/:product_id',  (req, res) => {
    const {product_id} = req.params
    const producto_buscado = productos.find(producto => producto.id === Number(product_id))
    if(!producto_buscado){
        //Logica de 404
    }
    const view_props = {
        layout: 'main',
        status: 200,
        ok: true,
        data: {
            product: producto_buscado,
        },
        helpers: {
        }
    }
    res.render('detail-view', view_props)
})
// Crear un nuevo producto
app.get('/product/new', (req, res) => {
    res.render('new-product-view')
    
})
// Guardar un nuevo producto
app.post('/product/new', (req, res) => {
    console.log('Consulta recibida')
    const {nombre, descripcion, precio, categorias} = req.body
    const campos_state = {
        nombre: {
        valor: nombre,
        error: null
        },
        descripcion: {
            valor: descripcion,
            error: null
        }, 
        precio: {
            valor: precio,
            error: null
        },
        categorias: {
            valor: categorias,
            error: null
        }
    }

    if(!nombre){
        campos_state.nombre.error = 'El nombre es requerido, debes ingresar un nombre valido'
    }
    const view_props = {
        layaout: 'main',
        status: 400,
        ok: false,
        data: {
            form_state: campos_state
        }
            
        }

    res.render('new-product-view', view_props)
})
app.get("/", (req, res) => {
    const view_props = {
        layaout: 'main',
        view_name: 'home',
        status: 200,
        ok: true,
        data: { // Propiedades de la vista
            products: productos, // Paso el array de productos
            title: 'Ofertas de la semana',

            
        },
        helpers: { // Helpers son funciones que se ejecutan antes de renderizar una plantilla
        
        }

    }
    res.render("home", view_props);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});