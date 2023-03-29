import { ApiError } from "../../../errors/ApiError.js"
import { cartsServices } from "../../../DAOS/services/Carts.services.js"

export const postCartValidator = async () => {
    //exist products
    const cart = await cartsServices.getCarts({products: []})
    if(cart){throw new ApiError('There is already an empty cart', 406)}
    //create cart
    const newCart = await cartsServices.createCart()
    //return new cart
    return newCart
}
