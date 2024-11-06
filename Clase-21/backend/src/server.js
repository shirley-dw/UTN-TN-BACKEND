import express from 'express'
import statusRouter from '../routes/status.route.js'
import authRouter from '../routes/auth.route.js'
import mongoDB from './config/db.config.js' 
import cors from 'cors'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)



app.listen(PORT, ()=> {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
})
