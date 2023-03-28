import { Router } from "express"
import { getProductsController } from "../controllers/product/getProducts.controller.js"
import { postProductsController } from "../controllers/product/postProducts.controller.js"
import { putProductsController } from "../controllers/product/putProducts.controller.js"
import { deleteProductsController } from "../controllers/product/deleteProducts.controller.js"

//var
const productsRouter = Router()

//REST
productsRouter.get('', getProductsController)
productsRouter.post('', postProductsController)
productsRouter.put('/:id', putProductsController)
productsRouter.delete('/:id', deleteProductsController)

export default productsRouter