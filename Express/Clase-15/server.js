import express from 'express'
import productsRouter from './routes/products.routes.js'


const app = express()
app.use(express.json());
const PORT = 4000


app.listen(PORT, () => {
    console.log(`La aplicacion se esta ejecutando en http://localhost:${PORT}`)
})

app.use('/api/products', productsRouter)