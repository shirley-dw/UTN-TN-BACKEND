import express from  'express'

const app = express()
const PORT = 3000

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

app.listen(PORT, () => {
    console.log(`La aplicacion se esta ejecutando en http://localhost:${PORT}`)
})