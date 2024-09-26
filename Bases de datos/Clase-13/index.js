import express from 'express'; // Importamos express de node
import filesystem from 'fs';

const app = express(); // Instancia de servidor, nos trae todos los metodos de express
const PORT = 3000 //Variable del puerto

/* 
 Cuando alguien consulte al endpoint 'Obtener-usuario' con metodo get ejecuto la callback
 La callback recibe dos parametros request y response(Siempre en el mismo orden).
 Request: Es un objeto con todos los datos de consulta (Hora de consulta, direccion IP, peso de consulta).
 Response: Es un objeto que usamos para emitir respuestas. */

/* app.get('/obtener-usuarios', async (request, response) =>{
    console.log('Recibido');
   // response.send({'mensaje': 'Hola', code : 200})// Envio respuesta a Postman
   const resultado = await filesystem.promises.readFile('./public/usuarios.json', {encoding: 'utf8'});
   const usuarios = JSON.parse(resultado)
   response.status(200).json({menssage: 'Hola', code: 200, data: usuarios})// Responde con un json. Modifico el status de la respuesta
   })
     */

// Listen espera recibir dos valores 1º el puerto / 2º callback
app.listen(PORT, () => { // Esta callback se ejecuta cuando se este escuchando mi APP en el puerto que le dedique
    
    console.log(`Servidor escuchando en el puerto ${PORT}`);// Ejecuta codigo una vez mi servidor este listo
});

// Url de mi servidor http://localhost:3000 agrego el endpoint 'obtener-usuarios'

/* Instalamos express:
npm install express

· Importamos express al inicio de mi codigo
· Instanciamos express
· Llamamos la puerto 3000
· Ejecutamos el servidor

# Error de terminal al correr codigo:
Cuando ejecutamos el servidor, nos muestra un error de terminal con el puerto:



 */
/* 
Crear un archivo llamado productos.json dentro de /public que tenga una lista de productos con id, titulo, precio, stock
Crear un endpoint llamado /obtener-productos que al consultarnos nos responda:
{
    mensaje: 'Productos obtenidos',
    status: 200,
    ok: true,
    data: [
        {producto}
    ]
}
El array de productos debe venir del contenido del productos.json

Agregar manejo de errores:
Si no se puede obtener la lista de productos deberan responder:
{
    mensaje: 'SERVER ERROR: Productos no obtenidos',
    status: 500,
    ok: false,
    data: null
}*/

app.get('/obtener-productos', async (request, response) => {
    try {
        const resultado = await filesystem.promises.readFile('./public/productos.json', {encoding: 'utf8'});
        const productos = JSON.parse(resultado)
        response.status(200).json({menssage: 'Productos obtenidos', status: 200, ok: true, data: productos})
        console.log('Productos obtenidos', productos);
    } catch (error) {
        response.json({menssage: 'SERVER ERROR: Productos no obtenidos', status: 500, ok: false, data: null})
        console.error('Error al obtener productos: ', error)
    }
})