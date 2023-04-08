import { ApiError } from "../../../errors/ApiError.errors.js";
import { productsServices } from '../../../daos/services/Products.services.js'

export const deleteProductsValidators = async (pid) => {
    //product exist?
    const existProd = await productsServices.getProductById(pid)
    if (!existProd){throw new ApiError(`product does't exist`, 406)}
    //return
    const deleted = await productsServices.deleteProduct({"_id": pid})
    return deleted
}