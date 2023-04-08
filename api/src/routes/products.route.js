import { Router } from "express"
import { getProductsController } from "../controllers/products/getProducts.controller.js"
import { postProductsController } from "../controllers/products/postProducts.controller.js"
import { putProductsController } from "../controllers/products/putProducts.controller.js"
import { deleteProductsController } from "../controllers/products/deleteProducts.controller.js"

//var
const productsRouter = Router()

//REST
productsRouter.get('/products', getProductsController)
productsRouter.post('/products', postProductsController)
productsRouter.put('/products/:pid', putProductsController)
productsRouter.delete('/products/:pid', deleteProductsController)

export default productsRouter