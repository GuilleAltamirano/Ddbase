import { Router } from "express"
import { getCartIdController } from "../controllers/cart/getCartId.controller.js"
import { postProductCartController } from "../controllers/cart/postProductCart.controller.js"
import { postCartController } from "../controllers/cart/postCart.controller.js"
import { getCartsController } from "../controllers/cart/getCarts.controller.js"

//var
const cartRouter = Router()

//rest
cartRouter.get('/carts', getCartsController)
cartRouter.post('/carts', postCartController)
cartRouter.get('/carts/:cid', getCartIdController)
cartRouter.post('/carts/:cid/product/:pid', postProductCartController)

export default cartRouter