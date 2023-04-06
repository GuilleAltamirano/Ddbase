import { Router } from "express"
import { getProductsController } from "../controllers/product/getProducts.controller.js"
import { postProductsController } from "../controllers/product/postProducts.controller.js"
import { putProductsController } from "../controllers/product/putProducts.controller.js"
import { deleteProductsController } from "../controllers/product/deleteProducts.controller.js"

//var
const productsRouter = Router()

//REST
productsRouter.get('/products', getProductsController)
productsRouter.post('/products', postProductsController)
productsRouter.put('/products/:pid', putProductsController)
productsRouter.delete('/products/:pid', deleteProductsController)

export default productsRouter