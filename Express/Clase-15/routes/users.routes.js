import express from 'express'
import { ResponseBuilder } from '../builders/response.builder'
import filesystem from 'fs'

//Instancia mi ruta y se lo asingo al user router
const userRouter = express.Router()
// La usamos como si fuera app, pero ahora tiene asignado las consultas de la ruta /api/users


//Endpoint real: /api/users

// Voy a buscar en mi lista de usuarios a todos los usuarios y devolvere a los active en true


userRouter.get('/', async (req, res) => {
    try {
        const users = JSON.parse(await filesystem.promises.readFile('data/usuarios.json', { encoding: 'utf-8' }))
        //Esto genera un objeto {response: {ok, status, message, payload}}

        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .set.message('Usuarios obtenidos')
        setPayload({
            users: users
        })
            .build()
        res.json(response)

    }
    catch (error) {
        const response = new ResponseBuilder()
            .setOK(false)
            .setStatus(500)
            .setMessage('Error al consultar la lista de usuarios')
        res.json(response.build())
    }

})

export default userRouter