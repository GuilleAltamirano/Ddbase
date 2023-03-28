import { ApiError } from "../../../errors/ApiError.js";


export const deleteProductsValidators = async (product) => {
    //product exist?
    if (!product){throw new ApiError(`product does't exist`, 406)}
    //ok
}