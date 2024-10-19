Clase 15º 02/10/2024

# Temas de la clase:
· Correccion de tareas clase 14º
· Ampliacion de conceptos de express y profundizacion.
. Postman.
. Middleware.



# Anotaciones:
. Middleware: Es un software que se sitomidou entre un sistema operativo y las aplicaciones que se ejecutan en el.
. npm init -y: Instalo el package.json.
. npm i express: Instalo la libreria.
· CONST APP = express(); es una variable que guarda la libreria express. (No olvidar importar express de express)

_______________________________________________________________________________________________________________________________________________

# Inicio del proyecto:
- Importo la libreria express.
- const app = express();
- const PORT = 8080;
- app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto {PORT}`))

_______________________________________________________________________________________________________________________________________________

# Middleware:
Un middleware en Express es una función que se ejecuta durante el ciclo de manejo de una solicitud HTTP.
 Se utiliza para procesar datos de solicitud, autenticar usuarios, registrar actividades, manipular respuestas y más. 
 Cada middleware tiene acceso a los objetos req (solicitud) y res (respuesta), así como a la función next, que llama al siguiente middleware
en la cadena.

_______________________________________________________________________________________________________________________________________________

# Objetos de respuesta:

//response.ok => Si la respuesta se hizo bien o no
//response.status => Determinamos como fue resuelta la operacion
//response.message => El mensaje que se envio en la respuesta
//response.payload / response.data / response.result  => Objeto con informacion.
app.get('/ping', (req, res) =>{
    res.json({
        ok: true,
        message: 'Consulta exitosa',
        status: 200,
        payload: {
            value: 'Pong'
        }
        //Logica de negocio que probablemente cambie mi respuesta
        //.status() settea el statusHTTP de mi respuesta
    })
})

_______________________________________________________________________________________________________________________________________________

# req.params:

Los parametros son los nombres que se usan en la URL para identificar los datos que se quieren consultar.
Para obtener los valores de un parámetro, se usa req.params, estas siempre tiene que ir por arriba de todo, es un objeto que va a guardar
todos mis parametros de busqueda. Los valores de mi req.params siempre seran "string".

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        message: 'Consulta exitosa',
        status: 200,
        payload: {
            value: id
        }
    })
})

En este ejemplo obtengo el id de la URL accediendo al parametro de busqueda del id con :id, este me devuelve el valor del id.
