import express from "express"
import { mongoConnect } from "./config/mongoose.config.js"
import { errHandler } from "./middlewares/errHandler.middlewares.js"
import productsRouter from "./routes/products.route.js"

//Vars
export const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('/public'))

//connect MongoDb
mongoConnect()

//routes
app.use('/api/products', productsRouter)

//handler error
app.use(errHandler)