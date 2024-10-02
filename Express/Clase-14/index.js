// Importo express
import { error } from "console";
import express from "express";
/* Pasos para inciar un poryecto:
* npm -y install
* npm install express
* Modifico el script por  "dev": "node --watch index.js" 
* npm run dev hago correr el servidor

# header de la consulta: (Cabecera de la consulta).
# body de la consulta: (Cuerpo de la consulta).
# POST: (Creo un nuevo recurso)
# GET: (Obtengo un recurso)
# PUT: (Actualizo un recurso)
# DELETE: (Elimino un recurso)


*/


const app = express(); // Se crea el servidor
const PORT = 8000;// Variable del puerto
//Todas las consultas HTTP que se hagan a mi server pasaran por app.use
// Expreess.json es un middleware si los headers de la consulta son content-type: application/json entonces guarda el body como json
app.use(express.json()); // Para leer el body esto se concoe como Middlewares programa que se ejecuta entre medio de otro programa
app.use(express.urlencoded({ extended: true })); // Extended: false es para que no me de error si no me envia el body
// Creo un endpoint ping => vamos a responder con un texto con contenido "pong"
app.get('/ping', (req, res) => {
    const response = {
        ok: true,
        status: 200,
        playload: {
            message: 'Consulta realizada con exito'
        }
    }
    //Logica del negocio
    // .status() settea ek statusHTTP de mi response(respuesta)
    res.status(200).json(response);
});
// .post() es el metodo para crear un nuevo recurso lo que me traera una respuesta
app.post('/ping', (req, res) => {
    //Capturar los datos del body(cuerpo de la respuesta)
    console.log(req.body.nombre);// Consulto el body
    //console.log(req.body); me devuelve undefined
    const response = {
        ok: true,
        status: 200,
        message: 'Consulta realizada con exito',
        playload: {

        }
    }
    res.json(response);
})
// Crear un endpoint POST llamado /register al que le pasaran  un username y una password
// Validar que el username y password sean datos de string no vacios
// Si hay error de valdiacion devolver un mensaje de error  responder, ok: false, status: 400, playload: {error: 'Debes tener un username valido'}
// Sino mostrar los datos por consola
// Si todo sale bien responder, ok: true, status: 200, playload: {message: 'Usuario creado con exito'}



/* Mejorar codigo */
app.post('/register', (req, res) => {
    const { username, password } = req.body
    let errorMessage = '' // Variable para almacenar el error
    if (!username) { 
        errorMessage = 'Debes tener un username valido'
    }
    if (!password) {
        errorMessage = 'Debes tener un password valido'
    }
    if (errorMessage) { 
        const response = {
            ok: false,
            status: 400,
            message: errorMessage
        }
        res.json(response)
    } else { 
        console.log(`Tu username es: ${username} y tu password es: ${password}`)
        const response = {
            ok: true,
            status: 200,
            message: 'Usuario creado con exito'
        }
        res.json(response)
    }
    
})

const productos = [ 
    {
        "id": 1,
        "nombre": "Escuadra",
        "imagen": "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "stock": 100,
        "precio": 1234567890,
        "descripcion": "Es una escuadra",

    },
    {
        "id": 2,
        "nombre": "Calculadora",
        "imagen": "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "stock": 100,
        "precio": 1234567890,
        "descripcion": "Es una calculadora",

    },
    {
        "id": 3,
        "nombre": "Globo terraqueo",
        "imagen": "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "stock": 100,
        "precio": 1234567890,
        "descripcion": "Es un globo terraqueo",
    }

]
app.get('/productos/:producto_id', (req, res) => { //Esta ruta tiene un parametro de busqueda llamado producto_id
  const producto_id = req.params.producto_id
    const response = {
        ok: true,
        status: 200,
        playload: {
            message: 'Productos obtenidos',
            data: productos
        }
    }
    res.json(response)
 
})
app.get('/productos', (req, res) => {
    const response = {
        ok: true,
        status: 200,
        playload: {
            message: 'Productos obtenidos',
            data: productos
        }
    }
    res.json(response)
 
})

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en http://localhost:${PORT}`);//Se ejecuta la callback server funcionando
})


