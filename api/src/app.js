import express from "express"
import { __dirname } from "./utils/utils.js"
import { mongoConnect } from "./config/mongoose.config.js"
import { errHandler } from "./middlewares/errHandler.middlewares.js"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import session from "express-session"
import productsRouter from "./routes/products.route.js"
import cartRouter from "./routes/carts.route.js"
import cookiesRoute from "./routes/cookies.router.js"
import sessionsRouter from "./routes/sessions.router.js"

//Vars
export const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname  + '/public'))
//process env
config({ path: `${__dirname}/environments/ecommerce.env` })
//connect MongoDb
mongoConnect()
//cookies
app.use(cookieParser("]zufn+nloHh-!Sxr^'cJV&}oSdsWE^&4MBU'K2cq4&6(%K$woK"))
//session
app.use(session({
    secret: 'UserSession',
    resave: true,
    saveUninitialized: true
}))
//routes
app.use('/api', productsRouter)
app.use('/api', cartRouter)
app.use('/api', cookiesRoute)
app.use('/api', sessionsRouter)
//handler error
app.use(errHandler)