import { Router } from "express"
import { getProductsController } from "../controllers/getProducts.controller.js"
import { postProductsController } from "../controllers/postProducts.controller.js"
import { putProductsController } from "../controllers/putProducts.controller.js"
import { deleteProductsController } from "../controllers/deleteProducts.controller.js"

//var
const productsRouter = Router()

//REST
productsRouter.get('', getProductsController)
productsRouter.post('', postProductsController)
productsRouter.put('/:id', putProductsController)
productsRouter.delete('/:id', deleteProductsController)

export default productsRouter