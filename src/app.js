import  express from "express";
import ProductManager from "./controllers/manager.js";

const app = express()
app.use(express.json());
const PORT = 8080;

const productManager = new ProductManager("./src/data/products.json")

const books = await productManager.getProducts()



//RUTA RAIZ "localhost:8080"
app.get('/', (request, response) => {
    response.send('<h1>TODO LIBROS</h1>')
})


// RUTA DE PRODUCTO SEGUN ID CON req.params
app.get('/products/:pid', (request, response) => {
    const id = request.params.pid
    const productId = books.find(item => item.id == id)
    if (!productId) {
        return response.send({Error: 'El libro no existe'})
    } else {
        response.send(productId)
    }
})


// LIMITADOR CON QUERY PARAMS
app.get('/products', (request, response) => {
    const limit = request.query.limit
    if (!limit) {
        response.send(books)
    } else {
        let prodLimit = books.slice(0,limit)
        response.send(prodLimit) 
    }
})



app.listen(PORT, () => console.log('Server Up'))