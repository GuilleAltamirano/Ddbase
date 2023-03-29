import { cartsServices } from "../../../DAOS/services/Carts.services.js"
import { ApiError } from "../../../errors/ApiError.js"

export const getCartIdValidator = async (cid) => {
    //exist cart?
    const cart = await cartsServices.cartsById(cid)
    if (!cart){throw new ApiError(`Cart id: ${cid} doesn't exist`, 404)}
    return cart.products
}
// await cartsServices.cartsById(req.params.id), req.params.id