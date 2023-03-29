import { Router } from "express"
import { getCartIdController } from "../controllers/cart/getCartId.controller.js"
import { postProductCartController } from "../controllers/cart/postProductCart.controller.js"
import { postCartController } from "../controllers/cart/postCart.controller.js"

//var
const cartRouter = Router()

//rest
cartRouter.post('', postCartController)
cartRouter.get('/:cid', getCartIdController)
cartRouter.post('/:cid/product/:pid', postProductCartController)

export default cartRouter