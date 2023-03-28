import { productsServices } from "../../../DAOS/services/products.services.js"
import { ApiError } from "../../../errors/ApiError.js"

export const postProductsValidations = async (obj) => {
    //destructuring object
    const {title, description, code, price, stock, category, thumbnail} = obj
    //Type of key's
    if ((typeof title !== 'string') || (!title) || (title.length < 4)) {throw new ApiError(`Title ${title} type is not valid`, 400)}
    if ((typeof description !== 'string') || (!description) || (description.length < 10)) {throw new ApiError(`Description ${description} type is not valid`)}
    if ((typeof code !== 'string') || (!code)) {throw new ApiError(`code ${code} type is not valid`, 400)}
    if ((typeof price !== 'number') || (!price)) {throw new ApiError(`price ${price} type is not valid`, 400)}
    if ((typeof stock !== 'number') || (!stock)) {throw new ApiError(`stock ${stock} type is not valid`, 400)}
    if ((typeof category !== 'string') || (!category)) {throw new ApiError(`category ${category} type is not valid`, 400)}
    if ((typeof thumbnail !== 'object')) {throw new ApiError(`thumbnail ${thumbnail} type is not valid`, 400)}
    //Exist product
    const prod = await productsServices.getProducts({code: obj.code})
    if (prod.length !== 0) {throw new ApiError(`This code ${code} existing`, 406)}
    //ok
}