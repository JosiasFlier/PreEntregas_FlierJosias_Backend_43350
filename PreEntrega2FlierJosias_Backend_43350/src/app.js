import  express from "express";
import userRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"



const app = express()
app.use(express.json());

const PORT = 8080;




//RUTA RAIZ "localhost:8080"
app.get('/', (request, response) => { response.send('<h1>TODO LIBROS</h1>')})


// endpoints con router

app.use('/api/products', userRouter)
app.use('/api/carts', cartRouter)



app.listen(PORT, () => console.log('Server Up'))